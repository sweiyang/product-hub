# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OCBC Product Hub — an internal dashboard that displays OCBC banking products with metrics, change logs, team info, and feedback. Built with Google AI Studio and deployed via their platform. Originally scaffolded from AI Studio's React template.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Type-check via `tsc --noEmit` (no ESLint configured)
- `npm run preview` — Preview production build
- `npm run clean` — Remove `dist/`

## Architecture

Single-page React app with no routing library. All UI lives in `src/App.tsx` as one large file with the main `App` component and a `ProductDetail` sub-component. State is managed with `useState` (selected category, selected product, search query, active tab/quarter).

- **`src/types.ts`** — TypeScript interfaces for the data model (`Product`, `Category`, `QuarterMetric`, etc.)
- **`src/data.ts`** — Static product data array (`PRODUCTS`). No backend/API; all data is hardcoded here.
- **`src/lib/utils.ts`** — `cn()` helper combining `clsx` + `tailwind-merge`
- **`src/index.css`** — Tailwind v4 setup with OCBC brand theme tokens (custom colors under `--color-ocbc-*`)

## Key Technical Details

- **Tailwind CSS v4** with the Vite plugin (`@tailwindcss/vite`), not PostCSS. Theme defined via `@theme` directive in `index.css`.
- **Path alias**: `@/*` maps to the project root (not `src/`), configured in both `tsconfig.json` and `vite.config.ts`.
- **Animations**: Uses `motion` (Framer Motion) for page transitions and hover effects.
- **Charts**: `recharts` for line/area charts in the product detail view.
- **Icons**: `lucide-react` throughout.
- **Gemini API key**: Injected via `process.env.GEMINI_API_KEY` at build time through Vite's `define` config. Set in `.env.local` (not committed). Currently unused in the codebase but wired up.
- **No test framework** is configured.
