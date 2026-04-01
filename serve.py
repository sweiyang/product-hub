#!/usr/bin/env python3
"""Serve the SPA from dist/ with YAML product data injected at runtime."""

import argparse
import http.server
import json
import os

import yaml


DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")


def load_products(yaml_path):
    with open(yaml_path) as f:
        return json.dumps(yaml.safe_load(f))


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    products_json = "[]"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST, **kwargs)

    def do_GET(self):
        path = os.path.join(DIST, self.path.lstrip("/"))
        if self.path == "/" or self.path == "/index.html" or (
            not os.path.exists(path) or os.path.isdir(path) and not os.path.exists(os.path.join(path, "index.html"))
        ):
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            html = self._inject_products()
            self.wfile.write(html.encode())
            return
        return super().do_GET()

    def _inject_products(self):
        index_path = os.path.join(DIST, "index.html")
        with open(index_path) as f:
            html = f.read()
        script = f"<script>window.__PRODUCTS__={self.products_json}</script>"
        return html.replace("</head>", f"{script}\n</head>")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Serve the Product Hub SPA")
    parser.add_argument("yaml_file", help="Path to products YAML config file")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind to (default: 127.0.0.1)")
    parser.add_argument("--port", type=int, default=3000, help="Port to listen on (default: 3000)")
    args = parser.parse_args()

    if not os.path.isdir(DIST):
        print(f"Error: {DIST} not found. Run 'npm run build' first.")
        raise SystemExit(1)

    SPAHandler.products_json = load_products(args.yaml_file)
    server = http.server.HTTPServer((args.host, args.port), SPAHandler)
    print(f"Serving {DIST} at http://{args.host}:{args.port}")
    print(f"Loaded products from {args.yaml_file}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
