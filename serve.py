#!/usr/bin/env python3
"""Serve the SPA from dist/ with fallback to index.html for client-side routing."""

import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST, **kwargs)

    def do_GET(self):
        path = os.path.join(DIST, self.path.lstrip("/"))
        if not os.path.exists(path) or os.path.isdir(path) and not os.path.exists(os.path.join(path, "index.html")):
            self.path = "/index.html"
        return super().do_GET()


if __name__ == "__main__":
    if not os.path.isdir(DIST):
        print(f"Error: {DIST} not found. Run 'npm run build' first.")
        sys.exit(1)
    server = http.server.HTTPServer(("0.0.0.0", PORT), SPAHandler)
    print(f"Serving {DIST} at http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
