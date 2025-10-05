# FiNAN Website Improvement Review

_Date: 2025-03-09_

This audit captures actionable improvements observed in the current `finan-website` codebase. Items are grouped by urgency; each callout links to the relevant source so fixes can be triaged quickly.

## High Priority

- **Convert inline viewport script to plain JavaScript**  
  **Location:** `src/layouts/Layout.astro:95`  
  **Issue:** The inline script ships the TypeScript-only annotation `let resizeTimer: ReturnType<typeof setTimeout>`, which browsers treat as a syntax error. The viewport height fix then never runs.  
  **Why it breaks:** When Astro renders this layout, the browser executes the `<script>` tag exactly as written. Because plain JavaScript does not understand TypeScript annotations, parsing stops at `: ReturnType<…>` and the console logs an `Unexpected token ':'` error before any of the helper functions run. As a result `setVH()` is never called and mobile height calculations fall back to the incorrect default.  
  **Recommendation:** Drop the annotation (or move the logic to a compiled TS module) so the mobile viewport sizing helper executes reliably.  
  **Fix example:**  
    ```html
    <script>
      function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }

      setVH();

      let resizeTimer;
      function debouncedSetVH() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setVH, 100);
      }

      window.addEventListener('resize', debouncedSetVH);
      window.addEventListener('orientationchange', () => setTimeout(setVH, 100));
      window.addEventListener('pageshow', setVH);
    </script>
    ```

- **Provide per-page metadata hooks in the layout**  
  **Location:** `src/layouts/Layout.astro:50`  
  **Issue:** Every route renders the same `<title>`/description pulled from `siteConfig`; the `title` prop passed from pages is ignored. This hurts SEO, link previews, and accessibility.  
  **Recommendation:** Accept `Astro.props` in `Layout` (e.g., `title`, `description`, `canonical`) and fall back to `siteConfig` only when a page does not override them.

- **Fix the hero heading breakpoint utility**  
  **Location:** `src/components/HeroHeader.astro:32`  
  **Issue:** Tailwind class `lg:text-6x` is a typo, so the hero never bumps to the intended `6xl` size on large displays.  
  **Recommendation:** Correct the modifier to `lg:text-6xl` (and re-run `npm run lint`) so the layout scales as designed.

- **Import the `ImageMetadata` type in `PageHeader`**  
  **Location:** `src/components/PageHeader.astro:8`  
  **Issue:** The component references `ImageMetadata` without importing it, which fails `astro check`/TypeScript builds.  
  **Recommendation:** Add `import type { ImageMetadata } from 'astro';` to the frontmatter so the shared header compiles.

- **Wire CTA buttons to real destinations**  
  **Location:** `src/data/ctaBannerConfig.ts:44` & `:48`  
  **Issue:** The buttons point to `#membership`/`#donate`, but no elements expose those IDs anywhere on the site. Clicking them does nothing.  
  **Recommendation:** Replace the anchors with live routes (e.g., `/membership`, `/donate`) or add matching section IDs where the CTAs appear.

## Medium Priority

- **Avoid caching HTML for a full year**  
  **Location:** `src/layouts/Layout.astro:18`  
  **Issue:** Setting `Cache-Control: public, max-age=31536000, immutable` at document level risks browsers serving outdated HTML.  
  **Recommendation:** Remove the meta tag and let the deployment platform manage HTTP caching, or use a modest `max-age` coupled with `must-revalidate`.

- **Normalize flag asset filenames**  
  **Location:** `src/components/TopBanner.astro:10`  
  **Issue:** File names like `115-faroe islands.svg` include spaces, which can lead to 404s on case-sensitive/static hosting setups.  
  **Recommendation:** Rename the SVGs to kebab-case and update references (`115-faroe-islands.svg`, `156-aland-islands.svg`).

- **Eliminate placeholder links in content sections**  
  **Locations:** `src/components/HowWeHelp.astro:50`, `:100`, `:147`; `src/components/Footer.astro:54`, `:152`, `:165`, `:178`, `:191`, `:203`; `src/components/Blog.astro` (multiple)  
  **Issue:** Numerous anchors resolve to `#` or dummy copy, which harms credibility and accessibility (screen readers announce “link, blank”).  
  **Recommendation:** Either convert these sections to pull real URLs from `src/data/` or hide the CTAs until destinations exist.

- **Unify JavaScript event wiring in the navbar**  
  **Location:** `public/js/navbar.js:56`  
  **Issue:** Every view transition adds another `document.addEventListener('click', ...)` listener without cleanup, so dropdowns keep re-closing immediately.  
  **Recommendation:** Move the handler into a dedicated function that detaches itself (or use `once: true`) before re-initialising after `astro:after-swap`.

- **Align CSP definitions**  
  **Locations:** `src/layouts/Layout.astro:42` vs. `security.config.js:25`  
  **Issue:** The layout embeds a CSP allowing `'unsafe-inline'`, while the shared config disallows it. This mismatch complicates deployment and weakens security expectations.  
  **Recommendation:** Generate the CSP string once (e.g., via `cspString`) and reuse it in both Vite dev headers and the layout.

- **Centralise hard-coded card data**  
  **Locations:** `src/components/Partners.astro`, `src/components/HowWeHelp.astro`, `src/components/Blog.astro`  
  **Issue:** These components duplicate markup and placeholder copy instead of reading from `src/data/`. Updating content requires code edits.  
  **Recommendation:** Extract structured data modules (similar to `heroConfig`/`statisticsConfig`) and map over them, which also simplifies localisation later.

## Low Priority / Content & DX

- **Replace stubbed social handles**  
  **Location:** `src/data/siteConfig.ts:75`  
  **Issue:** Values like `twitter: 'yourhandle'` and `github: 'https://github.com/yourusername'` leak into metadata.  
  **Recommendation:** Populate the real accounts or remove the fields until they exist to avoid misleading meta tags.

- **Refresh project documentation**  
  **Location:** `README.md:1`  
  **Issue:** The README is still the Astro starter template, which does not explain FiNAN’s goals, scripts, or contribution workflow.  
  **Recommendation:** Document the actual architecture, data sources, content strategy, and deployment steps so contributors can onboard quickly.

- **Reuse global site URL in the sitemap**  
  **Location:** `src/pages/sitemap.xml.ts:6`  
  **Issue:** The sitemap hard-codes `SITE = 'https://finan.eu.com'`, risking drift from `siteConfig.metadata.url`.  
  **Recommendation:** Import `siteConfig` (or a `getSiteConfig()` helper) so the sitemap stays accurate if the canonical domain changes.

- **Tighten newsletter form accessibility**  
  **Location:** `src/components/Footer.astro:24`  
  **Issue:** The email field lacks a `<label>`/`aria-describedby`, and the submit button does not report outcomes.  
  **Recommendation:** Add a visually hidden label, helper text, and success/error messaging placeholders to keep the form screen-reader friendly.

---

_Feel free to reach out if you’d like these packaged into issues or implementation PRs._
