# Repository Guidelines

## Project Structure & Module Organization

- `src/` contains the Astro application. Feature UI lives in `components/` (Navbar, HeroHeader, TopBanner, CTABanner, RegistrationSection, NordicRepresentation, WorkingCommittee, etc.).
- Page shells reside in `pages/` with marketing routes (`index`, `about`, `membership`, `contact-us`, `faq`, `guides-resources`) plus a `representation/` directory for Nordic country detail pages and `sitemap.xml.ts` for sitemap generation.
- Reusable data and copy are centralized in `src/data/` TypeScript modules (hero, CTA banner, statistics, registration, siteConfig). Regional representation data including working-committee and partnership configs are organized under `src/data/representation/`. Update these configs instead of hard-coding strings inside components.
- Global styling flows through Tailwind (imported in `src/styles/global.css`) with a small number of custom utilities. Co-locate images and SVGs under `src/assets/` when they are bundled, and place static files (flags, icons, JS enhancements like `public/js/navbar.js` and `public/js/mobile-menu.js`, robots.txt) inside `public/`.
- Shared chrome sits in `src/layouts/Layout.astro`. Keep additional layout wrappers here.
- Use `docs/` for product briefs, reference designs, and design assets; it already holds the FiNAN PRD, hero imagery, UI component notes, and research.
- Build artifacts land in `dist/`. Do not edit files in `dist/` manually.

## Build, Test, and Development Commands

- `npm install` — install dependencies locally.
- `npm run dev` — start the Astro dev server at `http://localhost:4321` with hot module reload.
- `npm run build` — output an optimized static build to `dist/`.
- `npm run preview` — serve the production build for smoke testing.
- `npm run astro <subcommand>` — access the Astro CLI (e.g., `npm run astro check`).
- `npm run lint` / `npm run lint:fix` — run ESLint across the project (Astro + TS file support).
- `npm run format` / `npm run format:check` — apply or verify Prettier formatting, including Tailwind class ordering.
- `npm run security:audit` — scan dependencies for known vulnerabilities (moderate threshold).
- `npm run security:check` — quick reminder that security headers are configured in `security.config.js`.

## Coding Style & Naming Conventions

- Author semantic HTML within `.astro` files using two-space indentation. Prefer accessible landmarks and headings that reflect the information architecture.
- Components follow PascalCase filenames; keep props typed when possible, and favor slicing large sections into readable subcomponents.
- Tailwind utility groupings should read left-to-right by breakpoint (`sm:`, `md:`) then state (`hover:`, `focus:`). Reach for utilities first; add bespoke CSS only in `src/styles/global.css` when Tailwind cannot cover the use case.
- Centralize copy, links, and counts in the `src/data/` modules so multiple components can share consistent content. When adding a new section, create a matching config module if data is reused.
- Use TypeScript for shared config, augmenting with explicit types when structures grow to keep editors happy (`siteConfig`, `regional-representatives`, etc.).

## Testing & QA Guidelines

- There is no automated test suite yet. Perform manual verification in current desktop and mobile browsers after meaningful changes.
- Run `npm run lint` and `npm run format:check` before pushing to avoid CI lint failures. Keep an eye on console warnings during `npm run dev`.
- If you add tests in the future, colocate under `src/` and name files `<feature>.spec.{js,ts}` to stay discoverable.

## Documentation, Version Control & Collaboration

- Follow the conventional commit style already in git history (`feat:`, `fix:`, `refactor:`, etc.) with subjects under 72 characters. Reference related issues when opening PRs.
- PRs should summarise functional impact, document manual QA (browsers checked, commands run), and include screenshots when UI shifts.
- Capture discovery notes, updated copy decks, or UX references in `docs/` rather than scattering them across components.

## Security & Configuration Tips

- `security.config.js` houses recommended headers and a CSP builder; revisit before deployments to align with hosting capabilities and enable HSTS once HTTPS is enforced.
- `astro.config.mjs` mirrors these headers inside the dev server and configures Tailwind v4 via `@tailwindcss/vite`. Update both files together if policies change.
- After dependency updates or new third-party integrations, re-run `npm run security:audit` and confirm CSP directives cover any added external origins or assets.
