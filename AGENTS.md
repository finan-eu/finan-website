# Repository Guidelines

## Project Structure & Module Organization
The Astro app lives in `src/`, with feature blocks split into `components/` (HeroHeader, TopBanner, RegistrationSection), page shells in `pages/`, and shared chrome in `layouts/`. Global styling flows through `styles/global.css` and Tailwind utility classes. Static assets (favicons, hero imagery) sit in `public/` and `src/assets/`. Use `docs/` for product briefs and reference designs, while `security.config.js` centralizes HTTP header recommendations. Build artifacts land in `dist/` after production builds.

## Build, Test, and Development Commands
- `npm install` — install dependencies locally.
- `npm run dev` — start the Astro dev server at `http://localhost:4321` with hot reloading.
- `npm run build` — produce an optimized static build in `dist/` for deployment.
- `npm run preview` — serve the build output for final smoke checks.
- `npm run astro <subcommand>` — access the Astro CLI (e.g., `npm run astro add tailwind`).
- `npm run security:audit` — scan dependencies for known vulnerabilities before release.

## Coding Style & Naming Conventions
Use semantic HTML inside `.astro` files, two-space indentation, and descriptive component names in PascalCase. Co-locate component-specific assets and keep Tailwind utility groupings readable (stack responsive modifiers, then state variants). When authoring new styles, prefer Tailwind over custom CSS unless you need bespoke rules in `global.css`.

## Testing Guidelines
The project currently has no automated test suite; prioritize manual checks in major browsers after each change. When adding tests, align the folder structure under `src/` and name files `<feature>.spec.{js,ts}` to stay discoverable.

## Commit & Pull Request Guidelines
Follow the conventional commit pattern already in Git history (`feat:`, `fix:`, `refactor:`). Keep messages under 72 characters in the subject and describe user-facing context in the body when needed. Pull requests should link related issues, summarize functional impact, note screenshots for UI shifts, and mention any manual QA or security audit runs.

## Security & Configuration Tips
Review `security.config.js` before deploys to keep headers aligned with hosting capabilities, and enable HSTS once HTTPS is enforced. After dependency updates or new integrations, re-run `npm run security:audit` and confirm CSP directives cover any added external origins.
