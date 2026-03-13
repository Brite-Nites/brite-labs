# Brite Labs Website

## Build & Test

```bash
npm run dev     # Local dev server
npm run build   # Production build (Next.js static generation)
npm run lint    # ESLint
```

No test suite configured yet.

## Architecture

- **Framework**: Next.js 16, React 19, TypeScript 5.9
- **Styling**: Tailwind CSS v4, shadcn/ui (Radix), tw-animate-css
- **Animation**: Framer Motion (client components only)
- **Fonts**: Roobert (headings, weights 500/600), Geist (body), MagdaClean (eyebrow), PP NeueBit (pixel accents)
- **Deployment**: Vercel (auto-detects Next.js)

### Key directories

```
src/app/                  # App Router pages + Server Actions
src/app/actions/          # Server Actions (newsletter signup)
src/components/           # Page-level components (brite-hero, brite-gallery, etc.)
src/components/industry/  # Reusable industry vertical system (universities, etc.)
src/components/ui/        # shadcn/ui primitives
public/fonts/             # Self-hosted fonts (WOFF2 preferred)
public/images/            # Static images (AVIF preferred)
docs/plans/               # Execution plans per Linear issue
```

### Component patterns

- `brite-logo.tsx` exports shared `BriteLogo` and `BriteLogoBar` — import these instead of duplicating
- Industry pages use a composable section system: `IndustryHero`, `IndustryServices`, etc.
- Dark theme is default (`<html className="dark">`). Industry pages use `.light` variant.

## Conventions

- **Design tokens**: Brand colors use `--brite-lavender` / `--brite-lavender-light` tokens in `globals.css`. Never hardcode hex values in components.
- **Images**: Use `next/image` for raster images. Use plain `<img>` or inline SVG for small SVG logos/icons (avoids unnecessary optimization pipeline). Always set `sizes` on `fill` images.
- **Links**: Use Next.js `<Link>` for internal navigation, not `<a>`.
- **Fonts**: All fonts are WOFF2. OTF files exist in the repo but are not referenced — use WOFF2 versions.
- **Server Actions**: Include try/catch, validate input length, never log PII. Rate limiting uses `@upstash/ratelimit` with lazy-initialized Redis client (fail closed on outage). Requires `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` env vars — see `.env.example`.

## Linear Project

Project: Brite Labs Website
Team: Brite Company (BRI)

## Gotchas

- `footer31.tsx` is `"use client"` and pulls in framer-motion. BRI-2017 tracks extracting the animated logo into its own client island to reduce bundle size.
- The `"Results"` section in `page.tsx` is an empty placeholder — nav item was removed but the `<section id="results">` element still exists.
- Font files in `assets/fonts/` are duplicates of `public/fonts/` — the app loads from `public/`.
