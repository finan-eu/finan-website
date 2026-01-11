# Repository Guidelines

## Purpose

This file orients agentic coding assistants working in this repo. It collects build/lint/typecheck commands, single-file workflows, and code style rules that match the current Astro + Tailwind stack.

## Project Structure & Module Organization

- `src/` holds the Astro site source. UI lives in `src/components/` (Navbar, HeroHeader, TopBanner, CTABanner, RegistrationSection, NordicRepresentation, WorkingCommittee, etc.).
- Page shells are in `src/pages/` with marketing routes (`index`, `about`, `membership`, `contact-us`, `faq`, `guides-resources`) plus `representation/` for country detail pages and `sitemap.xml.ts` for sitemap generation.
- Shared layouts live in `src/layouts/` with `Layout.astro` as the main chrome. Add new layout wrappers here.
- Centralized copy/data is stored in `src/data/` TypeScript modules (hero, CTA banner, statistics, registration, siteConfig). Regional representation data lives in `src/data/representation/`.
- Global styling flows through Tailwind (imported in `src/styles/global.css`) with a few custom utilities.
- Bundled images and SVGs belong in `src/assets/` so Astro can optimize them. Static files (flags, icons, JS enhancements like `public/js/navbar.js` and `public/js/mobile-menu.js`, robots.txt) belong in `public/`.
- Reference designs and discovery docs live in `docs/`.
- Build artifacts are generated into `dist/`; never edit `dist/` manually.

## Build, Lint, Format, and Typecheck Commands

Run commands from repo root unless stated otherwise:

- `npm install` — install dependencies.
- `npm run dev` — run the Astro dev server at `http://localhost:4321`.
- `npm run build` — generate production build into `dist/`.
- `npm run preview` — serve the production build for smoke testing.
- `npm run astro <subcommand>` — access Astro CLI utilities (e.g., `npm run astro check`).
- `npm run lint` — run ESLint across the project.
- `npm run lint:fix` — auto-fix lint issues where possible.
- `npm run format` — run Prettier with Tailwind class ordering.
- `npm run format:check` — verify formatting without changes.
- `npm run security:audit` — run `npm audit` at moderate threshold.
- `npm run security:check` — reminder that security headers live in `security.config.js`.

## Single-File or Targeted Checks

Use these when only a subset of files changes:

- Lint a file or directory: `npm run lint -- src/components/HeroHeader.astro`.
- Format a file: `npx prettier --write src/components/HeroHeader.astro`.
- Check formatting on a file: `npx prettier --check src/components/HeroHeader.astro`.
- Typecheck (full project): `npm run astro check`.

## Tests (Current State)

- There is no automated test runner configured.
- Manual verification is expected after meaningful UI changes (desktop + mobile).
- If tests are added later, colocate under `src/` and name them `<feature>.spec.{js,ts}`.
- When adding a runner, update this file with single-test commands.

## Astro Authoring Guidelines

- Keep Astro pages focused on composition; move repeated UI into `src/components/`.
- Use `Astro.props` for input props and keep component APIs small.
- Prefer slots for layout composition over deeply nested props.
- Avoid inline `<script>` tags unless necessary; place reusable behavior in `public/js/`.
- Use `Astro.site` and `astro-seo` data in page shells to keep metadata consistent.
- Watch for unused imports or props in `.astro` files to keep lint clean.

## Data & Content Guidelines

- Treat `src/data/` as the single source of truth for copy, links, and counts.
- Use descriptive keys for data objects so components remain readable.
- When adding new sections, create or extend data modules instead of hard-coding copy.
- Keep localized or regional content inside `src/data/representation/`.
- Add sensible defaults when new data fields are optional.

## Coding Style & Formatting

- Use semantic HTML in `.astro` templates with accessible landmarks and headings.
- Indent Astro markup with two spaces.
- Prefer composable components over large monolithic sections.
- Use Tailwind utilities first; only add custom CSS in `src/styles/global.css` when utilities cannot cover the use case.
- Group Tailwind classes by breakpoint then state: `sm:` → `md:` → `lg:` then `hover:`/`focus:`.
- Keep copy centralized in `src/data/` modules instead of hard-coding strings inside components.
- Use Astro components and slots for layout composition; avoid duplicating layout chrome.
- Keep props typed in components where TypeScript is used.

## Imports & Module Conventions

- Order imports: external packages first, then internal modules, then styles/assets.
- Prefer type-only imports (`import type`) when importing types.
- Use relative imports within `src/`; avoid absolute path aliasing unless configured.
- Keep imports minimal; remove unused imports promptly to satisfy ESLint.
- Avoid side-effect imports in `.astro` files unless required for polyfills.

## Naming Conventions

- Components: PascalCase filenames (e.g., `HeroHeader.astro`).
- Utility functions and variables: camelCase.
- Data modules in `src/data/`: camelCase with descriptive names (`siteConfig.ts`).
- CSS classes: Tailwind utilities; custom class names should be kebab-case if needed.
- Images and static assets: kebab-case filenames.

## TypeScript Usage

- Use TypeScript for shared configuration objects and structured data.
- Add explicit types when data structures become nested or reused in multiple modules.
- Prefer `as const` for read-only config data when it improves inference.
- Avoid `any`; use narrow union types where possible.
- Keep data modules export-only; avoid runtime side effects in `src/data/`.

## Error Handling & Resilience

- Guard against missing data when rendering dynamic sections.
- Prefer sensible defaults in data modules to avoid runtime template errors.
- Avoid throwing inside Astro templates; handle errors in data loading layers.
- When fetching external content, use try/catch and surface fallback UI or copy.
- Avoid breaking the build on optional external data; degrade gracefully.

## Styling, Assets, and Performance

- Use `src/assets/` for images that benefit from Astro optimization.
- Use `public/` for static files that must preserve their original paths.
- When adding/updating committee photos, **ALWAYS** follow `.opencode/rules/committee-images.md` for Astro asset optimization.
- Keep class lists readable; split into multiple lines when they grow large.
- Favor responsive image sizes over oversized assets.
- Remove unused assets when deprecating sections.

## Accessibility & SEO

- Keep heading hierarchy consistent (`h1` once per page).
- Ensure links and buttons have clear, descriptive labels.
- Maintain alt text for images in `src/assets/` or `public/`.
- Use `astro-seo` data in page shells for metadata consistency.
- Verify focus states remain visible after Tailwind changes.

## Manual QA Checklist

- Confirm layout on mobile, tablet, and desktop breakpoints.
- Check nav and mobile menu interactions after JS updates.
- Validate external links open correctly and use `rel` when needed.
- Run `npm run lint` and `npm run format:check` before handoff.

## Documentation & Collaboration

- Follow conventional commit style (`feat:`, `fix:`, `refactor:`) with subjects under 72 characters.
- PRs should summarize functional impact, document manual QA (browsers checked, commands run), and include screenshots when UI shifts.
- Capture new discovery notes or UX references in `docs/`.

## Security & Configuration Notes

- `security.config.js` defines recommended security headers and CSP helpers.
- `astro.config.mjs` mirrors headers for dev server behavior; update both if policies change.
- Re-run `npm run security:audit` after dependency updates or third-party integrations.

## Cursor/Copilot Rules

- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` files are present as of the latest scan.
