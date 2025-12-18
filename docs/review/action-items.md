# FiNAN Website - Action Items Checklist

**Last Updated:** December 16, 2025
**Overall Assessment:** 7.5/10 → Target: 8.5-9.0/10

This document provides a prioritized, trackable checklist of all improvement recommendations from the comprehensive review. Check off items as you complete them.

---

## Quick Stats

- **Total Items:** 36
- **Critical:** 4 items (2-4 hours total)
- **High Priority:** 6 items (3-6 hours total)
- **Medium Priority:** 10 items (8-15 hours total)
- **Low Priority:** 16 items (20-40 hours total)

---

## 🔴 Critical Priority (Fix Immediately)

**Estimated Total Effort:** 2-4 hours
**Impact:** Very High

### Code Quality

- [x] **#1: Remove duplicate JavaScript file** ✅
  - **File:** `/public/js/mobile-menu.js`
  - **Action:** Delete `mobile-menu.js`, verify only `navbar.js` is used
  - **Effort:** Low (1-2 hours)
  - **Impact:** High (smaller bundle, cleaner codebase)
  - **Files to Update:**
    - ✅ Deleted `/public/js/mobile-menu.js`
    - ✅ Verified `src/components/Navbar.astro` only references `navbar.js`
    - ✅ Tested navbar functionality - build successful

- [ ] **#2: Fix Denmark committee placeholder images**
  - **File:** `src/data/representation/working-committee/denmarkCommittee.ts`
  - **Action:** Replace placeholder SVG with actual photos or remove members
  - **Effort:** Low-Medium (depends on photo availability)
  - **Impact:** High (visual consistency, Astro optimization)
  - **Options:**
    - Option A: Add real photos following image import pattern
    - Option B: Remove members without photos
  - **Steps if adding photos:**
    1. Place photos in `src/assets/images/working-committee/denmark/`
    2. Import photos at top of file: `import johnDoeImage from '...'`
    3. Update `imageSrc` to use imported reference
    4. Update `imageAlt` with descriptive text

### SEO

- [ ] **#3: Update Twitter handles in SEO config**
  - **File:** `src/data/siteConfig.ts` (lines 143-144)
  - **Action:** Replace `'yourhandle'` with actual handle or remove
  - **Effort:** Very Low (2 minutes)
  - **Impact:** Medium (social media attribution)
  - **Change:**
    ```diff
    - site: 'yourhandle',
    - creator: 'yourhandle',
    + site: '@FiNANNordic',  // Use actual handle
    + creator: '@FiNANNordic',
    ```

### Security

- [ ] **#4: Enable HSTS header**
  - **File:** `security.config.js` (lines 17-18)
  - **Action:** Uncomment HSTS header (site already uses HTTPS)
  - **Effort:** Very Low (2 minutes)
  - **Impact:** High (security against SSL stripping)
  - **Change:**
    ```diff
    - // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
    + 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    ```
  - **Verify:** Ensure all subdomains support HTTPS before enabling

---

## 🟡 High Priority (Fix Soon)

**Estimated Total Effort:** 3-6 hours
**Impact:** High

### User Experience

- [ ] **#5: Remove dead `href="#"` links**
  - **Files:**
    - `src/components/OurAdvocacy.astro` (lines 23, 44, 65)
    - `src/components/HowWeHelp.astro` (lines 51, 100, 147)
  - **Action:** Fix 6 non-functional links
  - **Effort:** Low-Medium (depends on intended behavior)
  - **Impact:** Medium (UX, accessibility)
  - **Options:**
    - Remove links if no destination exists
    - Add proper destinations
    - Remove "Learn More" text entirely

### Performance

- [ ] **#6: Optimize large PNG images**
  - **Files:**
    - `src/assets/images/working-committee/iceland/marvi-gil.png` (147KB)
    - `src/assets/images/working-committee/norway/ian-faigones.png` (68KB)
    - `src/assets/images/working-committee/sweden/gemma-lilac-epler.png` (42KB)
  - **Action:** Compress or convert to JPG/WebP
  - **Effort:** Low (1-2 hours)
  - **Impact:** High (page load performance)
  - **Steps:**
    1. Analyze images: `file [image-path]`
    2. Convert to JPG (if photos): `convert [image].png -quality 85 [image].jpg`
    3. OR compress PNG: `pngquant --quality=65-80 [image].png`
    4. Update imports in committee files

### Code Quality

- [ ] **#7: Update outdated dependencies**
  - **File:** `package.json`
  - **Action:** Run `npm update` to get latest patches
  - **Effort:** Very Low (10 minutes)
  - **Impact:** Low (bug fixes, minor improvements)
  - **Command:** `npm update && npm run build && npm run lint`

- [ ] **#8: Remove commented code**
  - **Files:**
    - `src/layouts/Layout.astro` (lines 210-235)
    - `src/styles/global.css` (lines 4-54)
    - `src/components/Navbar.astro` (multiple locations)
    - `src/pages/index.astro` (line 33)
  - **Action:** Delete all commented-out code blocks
  - **Effort:** Very Low (30 minutes)
  - **Impact:** Low (code cleanliness)
  - **Rationale:** Git history preserves old code

- [ ] **#9: Fix `.jpeg` file extension inconsistency**
  - **File:** `src/data/representation/working-committee/swedenCommittee.ts:5`
  - **Action:** Rename `cherish-mizona.jpeg` to `.jpg`
  - **Effort:** Very Low (5 minutes)
  - **Impact:** Medium (consistency with documentation)
  - **Steps:**
    1. `cd src/assets/images/working-committee/sweden`
    2. `mv cherish-mizona.jpeg cherish-mizona.jpg`
    3. Update import in `swedenCommittee.ts`

### Configuration

- [ ] **#10: Create Tailwind config file**
  - **File:** Create `tailwind.config.ts` in root
  - **Action:** Create explicit Tailwind configuration
  - **Effort:** Low (1 hour)
  - **Impact:** Medium (maintainability, customization)
  - **Reference:** See improvements.md Section 7 for template

---

## 🟡 Medium Priority (Plan & Implement)

**Estimated Total Effort:** 8-15 hours
**Impact:** High

### Accessibility

- [ ] **#11: Add skip navigation link**
  - **File:** `src/layouts/Layout.astro`
  - **Action:** Add skip link for keyboard users
  - **Effort:** Very Low (15 minutes)
  - **Impact:** High (WCAG compliance, accessibility)
  - **Code:**
    ```astro
    <a href="#main-content" class="sr-only focus:not-sr-only ...">
      Skip to main content
    </a>
    ```
  - **Also Add:** `id="main-content"` to `<main>` element

- [ ] **#18: Verify color contrast (WCAG compliance)**
  - **Action:** Run automated accessibility audits
  - **Effort:** Low (audit) + Medium (fixes if needed)
  - **Impact:** High (WCAG compliance)
  - **Tools:**
    - Install axe DevTools browser extension
    - Run Lighthouse audit
    - Install WAVE extension
  - **Check:** `text-gray-600`, `text-gray-700` on light backgrounds

### Performance

- [ ] **#12: Fix eager loading overuse**
  - **Files:** Multiple components (Navbar, Footer, PageHeader)
  - **Action:** Change footer logo to `loading="lazy"`
  - **Effort:** Very Low (10 minutes)
  - **Impact:** Medium (Core Web Vitals)
  - **Keep eager:** HeroHeader, Navbar logo
  - **Change to lazy:** Footer logo

- [ ] **#13: Optimize font loading**
  - **File:** `src/layouts/Layout.astro` (lines 108-119)
  - **Action:** Remove unused font weights, add `font-display=swap`
  - **Effort:** Low-Medium (1-3 hours)
  - **Impact:** Medium (LCP, performance)
  - **Steps:**
    1. Audit used weights: `grep -r "font-.*[0-9]" src/`
    2. Remove unused weights (500, 800)
    3. Add `&display=swap` to URL
    4. Optional: Consider self-hosting fonts

- [ ] **#14: Optimize Ghost API performance**
  - **File:** `src/lib/ghost.ts`
  - **Action:** Investigate server-side tag filtering or add limit
  - **Effort:** Medium (2-4 hours, requires testing)
  - **Impact:** High (scalability as blog grows)
  - **Steps:**
    1. Verify if `filter: 'tag:${tag}'` works server-side
    2. Change `limit: 'all'` to reasonable number (e.g., 100)
    3. Test with Ghost API

### SEO

- [ ] **#15: Create robots.txt**
  - **File:** Create `public/robots.txt`
  - **Action:** Add robots.txt with sitemap reference
  - **Effort:** Very Low (5 minutes)
  - **Impact:** Medium (SEO, crawling)
  - **Content:**
    ```
    User-agent: *
    Allow: /
    Sitemap: https://www.finan.eu.com/sitemap.xml
    ```
  - **Submit sitemap to:** Google Search Console, Bing Webmaster

### Configuration

- [ ] **#16: Create EditorConfig**
  - **File:** Create `.editorconfig` in root
  - **Action:** Add editor configuration for consistency
  - **Effort:** Very Low (5 minutes)
  - **Impact:** Medium (team consistency)
  - **Reference:** See improvements.md Section 7 for template

- [ ] **#17: Implement CI/CD pipeline**
  - **File:** Create `.github/workflows/ci.yml`
  - **Action:** Set up GitHub Actions for automated testing
  - **Effort:** Low-Medium (2-3 hours)
  - **Impact:** High (code quality, prevents broken builds)
  - **Checks to add:**
    - ESLint: `npm run lint`
    - Prettier: `npm run format:check`
    - Build: `npm run build`
    - Security: `npm audit`
  - **Reference:** See improvements.md Section 7 for template

### Security

- [ ] **#19: Review and tighten CSP CloudFront wildcards**
  - **File:** `security.config.js` (line 61)
  - **Action:** Replace `https://*.cloudfront.net` with specific subdomain
  - **Effort:** Medium (requires production analysis)
  - **Impact:** Medium (security hardening)
  - **Steps:**
    1. Run site in production
    2. Check Network tab for Ghost image URLs
    3. Identify specific CloudFront distribution ID
    4. Replace wildcard with specific subdomain

### Dependencies

- [ ] **#20: Update Prettier plugin (major version jump)**
  - **File:** `package.json`
  - **Action:** Update `prettier-plugin-tailwindcss` 0.6.14 → 0.7.2
  - **Effort:** Low (30 minutes)
  - **Impact:** Medium (formatting consistency)
  - **Steps:**
    1. Review changelog
    2. `npm install -D prettier-plugin-tailwindcss@latest`
    3. `npm run format`
    4. Check for formatting changes
    5. Commit separately if changes found

---

## 🟢 Low Priority (Nice to Have)

**Estimated Total Effort:** 20-40 hours
**Impact:** Variable

### Code Quality

- [ ] **#21: Fix empty LinkedIn URLs**
  - **Files:** Multiple committee data files
  - **Action:** Omit `linkedinUrl` property when empty
  - **Effort:** Low (1 hour)
  - **Impact:** Low (code quality)
  - **Change:** Remove `linkedinUrl: ''` or use `undefined`

### Security

- [ ] **#22: Add SRI for external resources (optional)**
  - **File:** `src/layouts/Layout.astro`
  - **Action:** Add integrity hashes for Google Fonts
  - **Effort:** Medium (maintenance burden as URLs change)
  - **Impact:** Low (Google Fonts generally trusted)
  - **Note:** Consider self-hosting fonts instead

- [ ] **#23: Implement environment-aware logging**
  - **File:** `src/lib/ghost.ts`
  - **Action:** Remove/hide console logs in production
  - **Effort:** Low (1 hour)
  - **Impact:** Low (security through obscurity)
  - **Code:**
    ```typescript
    const isDev = import.meta.env.DEV;
    if (isDev) console.warn(...);
    ```

### Accessibility

- [ ] **#24: Enhanced alt text for committee images**
  - **Files:** All committee data files
  - **Action:** Make alt text more descriptive
  - **Effort:** Low (1 hour)
  - **Impact:** Low (incremental improvement)
  - **Template:** `'Professional headshot of [Name], [Role] at FiNAN [Country]'`

- [ ] **#25: Focus management enhancements in accordions**
  - **Files:** Accordion components
  - **Action:** Optional focus management for long content
  - **Effort:** Low (30 minutes)
  - **Impact:** Low (UX enhancement)
  - **Note:** Current implementation is already accessible

- [ ] **#26: Verify heading hierarchy on all pages**
  - **Files:** All page files
  - **Action:** Audit for proper h1→h2→h3 structure
  - **Effort:** Low (audit) + Variable (fixes)
  - **Impact:** Medium (SEO, accessibility)
  - **Tool:** Use headingsMap browser extension

### SEO

- [ ] **#27: Add breadcrumb structured data**
  - **Files:** Representation pages
  - **Action:** Create BreadcrumbStructuredData component
  - **Effort:** Medium (2-3 hours)
  - **Impact:** Low (incremental SEO benefit)
  - **Reference:** See improvements.md Section 5 for code

- [ ] **#28: Plan multilingual support (if needed)**
  - **Files:** Site-wide
  - **Action:** Research and plan i18n implementation
  - **Effort:** High (major feature)
  - **Impact:** High (if multilingual needed)
  - **Languages:** Finnish, Swedish, Norwegian, Danish
  - **Requirements:** hreflang tags, i18n routing, translations

### Dependencies

- [ ] **#29: Add dependency automation (Dependabot/Renovate)**
  - **File:** Create `.github/dependabot.yml`
  - **Action:** Set up automated dependency updates
  - **Effort:** Low (1 hour setup)
  - **Impact:** Medium (automated maintenance)
  - **Options:**
    - Dependabot (GitHub native)
    - Renovate Bot (more configurable)

- [ ] **#30: Verify @astrojs/sitemap usage**
  - **File:** `package.json`
  - **Action:** Remove if unused (manual sitemap exists)
  - **Effort:** Very Low (5 minutes)
  - **Impact:** Low (cleaner dependencies)
  - **Command:** `grep -r "@astrojs/sitemap" src/`

- [ ] **#31: Add Node version documentation**
  - **Files:** Create `.nvmrc`, update README
  - **Action:** Document Node version requirements
  - **Effort:** Very Low (5 minutes)
  - **Impact:** Low (developer experience)
  - **Content:** `.nvmrc` with `20.11.0`

### Configuration

- [ ] **#32: Add environment variable type definitions**
  - **File:** `src/env.d.ts`
  - **Action:** Add TypeScript types for env vars
  - **Effort:** Very Low (15 minutes)
  - **Impact:** Low (developer experience)
  - **Reference:** See improvements.md Section 7 for template

### Documentation

- [ ] **#33: Create CONTRIBUTING.md**
  - **File:** Create `CONTRIBUTING.md` in root
  - **Action:** Document contribution guidelines
  - **Effort:** Low (1 hour)
  - **Impact:** Medium (team collaboration)
  - **Include:**
    - Development setup
    - Code quality workflow
    - Commit message conventions
    - PR process
    - Image import pattern reference

### Testing

- [ ] **#34: Add testing framework**
  - **Files:** Create `tests/` directory structure
  - **Action:** Set up Vitest + Playwright
  - **Effort:** High (initial: 4-8 hours, ongoing: variable)
  - **Impact:** High (prevents regressions, confidence)
  - **Steps:**
    1. Install Vitest: `npm install -D vitest @vitest/ui`
    2. Install Playwright: `npm install -D @playwright/test`
    3. Create test directory structure
    4. Write initial tests (navigation, accordions)
    5. Add test scripts to package.json
  - **Priority:** High for long-term maintainability

### Analytics & Monitoring

- [ ] **#35: Add analytics tracking**
  - **File:** `src/layouts/Layout.astro`
  - **Action:** Implement privacy-friendly analytics
  - **Effort:** Low (1-2 hours)
  - **Impact:** Medium (data-driven decisions)
  - **Options:**
    - Plausible Analytics (recommended, privacy-focused)
    - Fathom Analytics
    - Google Analytics 4 (with consent)
  - **Note:** Update CSP if using GA

- [ ] **#36: Add error tracking service**
  - **Files:** Site-wide
  - **Action:** Implement error monitoring
  - **Effort:** Medium (3-5 hours)
  - **Impact:** Medium (better debugging)
  - **Options:**
    - Sentry (recommended)
    - LogRocket
  - **Additional:**
    - Create custom error pages (500.astro, error.astro)
    - Add user-facing error messages

---

## Progress Tracking

### By Priority

- **Critical (4 items):** ☑☐☐☐ (1/4 complete)
- **High (6 items):** ☐☐☐☐☐☐
- **Medium (10 items):** ☐☐☐☐☐☐☐☐☐☐
- **Low (16 items):** ☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐

### By Category

- **Code Quality:** 5 items
- **Performance:** 4 items
- **Security:** 5 items
- **Accessibility:** 5 items
- **SEO:** 4 items
- **Dependencies:** 4 items
- **Configuration:** 4 items
- **Documentation:** 1 item
- **Testing:** 1 item
- **Analytics:** 2 items

---

## Recommended Implementation Phases

### Phase 1: Quick Wins (Week 1)
**Target:** Fix all critical items + easy high-priority items
**Estimated Effort:** 4-8 hours
**Expected Score Improvement:** 7.5 → 8.2

- [x] Items #1-4 (Critical)
- [x] Items #7-9 (High - very low effort)
- [x] Item #11 (Medium - skip link)
- [x] Item #12 (Medium - eager loading)

### Phase 2: Performance & UX (Week 2)
**Target:** Improve performance and user experience
**Estimated Effort:** 6-10 hours
**Expected Score Improvement:** 8.2 → 8.5

- [x] Items #5-6 (High)
- [x] Item #10 (High - Tailwind config)
- [x] Items #13-15 (Medium)

### Phase 3: Infrastructure (Week 3-4)
**Target:** Set up automation and monitoring
**Estimated Effort:** 8-12 hours
**Expected Score Improvement:** 8.5 → 8.8

- [x] Items #16-17 (Medium - EditorConfig, CI/CD)
- [x] Item #18 (Medium - accessibility audit)
- [x] Items #29, #33-36 (Low - automation, docs, testing, analytics)

### Phase 4: Long-term Improvements (Ongoing)
**Target:** Continuous improvement
**Estimated Effort:** Variable
**Expected Score Improvement:** 8.8 → 9.0+

- [x] Remaining low-priority items as time permits
- [x] Expand test coverage
- [x] Monitor and optimize performance
- [x] Consider multilingual support if needed

---

## Success Metrics

### Target Scores After Completion

| Category | Current | Target | Gap |
|----------|---------|--------|-----|
| Architecture & Code Quality | 8.0 | 9.0 | +1.0 |
| Performance | 7.0 | 8.5 | +1.5 |
| Security | 9.0 | 9.5 | +0.5 |
| Accessibility | 7.5 | 8.5 | +1.0 |
| SEO | 9.5 | 9.5 | 0.0 |
| Dependencies | 8.5 | 9.0 | +0.5 |
| Configuration | 7.0 | 8.5 | +1.5 |
| Testing | 0.0 | 7.0 | +7.0 |
| Documentation | 8.0 | 9.0 | +1.0 |

**Overall:** 7.5 → 8.8-9.0

---

## Notes

- **Effort Estimates:**
  - Very Low: <30 minutes
  - Low: 30 minutes - 2 hours
  - Low-Medium: 2-4 hours
  - Medium: 4-8 hours
  - High: 8+ hours

- **Priority Guidelines:**
  - 🔴 **Critical:** Fix immediately, affects security/functionality
  - 🟡 **High:** Fix soon, significant impact on quality/UX
  - 🟡 **Medium:** Plan and implement, good ROI
  - 🟢 **Low:** Nice to have, implement when time permits

- **Testing Strategy:**
  - After each fix, run: `npm run build && npm run lint && npm run format`
  - Test locally: `npm run dev`
  - Check production build: `npm run preview`

---

## Links

- **Full Review:** `docs/review/improvements.md`
- **Project Documentation:** `CLAUDE.md`
- **Image Guidelines:** `.claude/rules/working-committee-images.md`

---

**Last Updated:** December 16, 2025
**Maintainer:** Development Team
**Review Cycle:** Quarterly
