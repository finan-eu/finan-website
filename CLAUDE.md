# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

FiNAN (Filipino Nurses Association in the Nordic Region) official website — an Astro 5 static site deployed to Cloudflare Pages at `https://finan.eu.com`. Blog content is managed via Ghost CMS.

## Commands

```bash
npm run dev           # Dev server at http://localhost:4321
npm run build         # Production build to ./dist/
npm run check         # Astro + TypeScript checks
npm run lint          # ESLint
npm run lint:fix      # ESLint with auto-fix
npm run format        # Prettier (sorts Tailwind classes too)
npm run format:check  # Check formatting without writing
npm run check:all     # Full quality gate: lint + format:check + check + build
```

**After making changes, always run:**
```bash
npm run lint:fix && npm run format
```

Pre-commit runs lint-staged on staged files; pre-push runs `check:all`.

## Architecture

### Data-driven component pattern

All page copy and config lives in `src/data/` TypeScript modules — not inline in `.astro` files. Components receive typed props; pages compose sections using imported components.

- `src/data/siteConfig.ts` — central SEO config, Open Graph, Twitter Card, helper functions (`getFullUrl`, `getPageTitle`, `mergeSEOConfig`)
- `src/data/heroConfig.ts`, `ctaBannerConfig.ts`, etc. — component-level content configs
- `src/data/representation/` — per-country committee member data, partnerships, publications
- `src/data/pages/` — page-specific data (FAQ, etc.)

Use `as const satisfies <Interface>` for read-only config objects.

### Layout and routing

- `src/layouts/Layout.astro` — single shared layout wrapping all pages. Handles SEO via `astro-seo`, Open Graph, structured data, `<ClientRouter />` for view transitions, and lazy-loads the Motion animations bundle when `enableMotion` prop is true.
- Pages in `src/pages/` use file-based routing. `src/pages/representation/` has 8 Nordic country pages.
- Layout props for per-page SEO overrides: `title`, `description`, `image`, `noindex`, `nofollow`, `keywords`, `article`, `showNavbar`, `showFooter`, `showBanner`, `mainClass`.

### Ghost CMS integration

`src/lib/ghost.ts` — lazy-initialized `TSGhostContentAPI` client. Requires `.env`:
```
GHOST_URL=...
GHOST_CONTENT_API_KEY=...
```

Set `GHOST_STRICT=true` in production to throw on Ghost errors instead of silently returning empty arrays. Tag filtering is done in-memory (the `ts-ghost` library doesn't support server-side tag filters in `browse()`).

### Asset handling

- `src/assets/images/` — Astro-optimized images (committee photos, events, gallery). **Always import as module references**, never use raw string paths.
- `public/` — static assets served as-is (flags, icons, fonts, JS, OG images).

### Security

`security.config.js` defines CSP and security headers applied via a custom Vite plugin in dev and must be mirrored in Cloudflare Pages config for production. When adding new external sources (scripts, images, fonts), update the CSP allowlist there.

## Coding conventions

### Tailwind

- Group classes: base → `sm:` → `md:` → `lg:` → `hover:`/`focus:`
- Primary buttons require: `shadow-lg transition-all duration-200 hover:shadow-xl`
- Lists with wrapped text: `list-outside list-disc pl-6` (never `list-inside`)
- Prettier auto-sorts class order on `format`

### TypeScript

- Strict mode enabled — no `any`, use narrow union types
- `import type` for type-only imports
- Export-only data modules (no runtime side effects)

### Astro components

- Avoid inline `<script>` tags — reusable client behavior goes in `public/js/`
- Use slots for layout composition over deeply nested props
- Semantic HTML with accessible landmarks

### Naming

| Type | Convention |
|------|------------|
| Components | `PascalCase.astro` |
| Utility functions | `camelCase` |
| Data modules | `camelCase.ts` |
| Image files | `kebab-case.jpg` |

## Adding new pages

1. Create `.astro` in `src/pages/`
2. Import `Layout` from `../layouts/Layout.astro`
3. Add page data to `src/data/pages/` if needed
4. Update `src/pages/sitemap.xml.ts` if the page should appear in the sitemap

## Environment

`.env.example` documents required variables. The site auto-applies `noindex,nofollow` on `*.pages.dev` preview domains.
