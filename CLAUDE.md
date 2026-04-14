# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
```

No lint, test, or format scripts are configured.

## Architecture

This is a static portfolio site built with **Astro + React + Tailwind CSS**.

- **Astro** handles all pages and most components (`.astro` files are server-rendered, zero JS by default)
- **React** is only used where client-side interactivity or animation is needed (e.g. `EducationRoadmap.tsx` with Framer Motion)
- **Tailwind CSS v4** is configured via the Vite plugin (`@tailwindcss/vite`) — there is no `tailwind.config.js`

### Component hydration strategy

React components are hydrated with `client:visible` (lazy hydration on viewport entry). Keep React usage minimal — prefer `.astro` components unless animation or interactivity is required.

### Styling

Custom theme tokens are defined in `src/styles/global.css` as CSS variables:

| Variable | Value | Role |
|---|---|---|
| `--color-primary` | `#e12826` | Red accent |
| `--color-secondary` | `#299f93` | Teal accent |
| `--color-accent` | `#f0a500` | Orange |
| `--color-light` | `#f7f9fb` | Background |
| `--color-dark` | `#0e1117` | Text/background |
| `--font-display` | Bebas Neue | Brutalist display headings |
| `--font-body` | Syne | Body text |
| `--font-signature` | Dancing Script | Signature/logo |

Use these variables (e.g. `text-[var(--color-primary)]`) rather than hardcoding colors.

### Tech stack icons

Icons are loaded dynamically from `simpleicons.org` CDN — no bundled icon assets. See `About.astro` for the pattern used.

### Email obfuscation

The hero section uses a client-side string reconstruction technique to prevent email scraping. The email is never written in plain text in the source — it's assembled in an inline `<script>` and revealed on click (also copies to clipboard).

### Public assets

Static assets served from `public/`:
- `Nathan_Kibet_CV.pdf` — CV download linked from Navbar and Hero
- `portrait.png`, `full_body.png` — profile images
