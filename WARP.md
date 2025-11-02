# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

FiNAN (Filipino Nurses Association in the Nordic Region) is a professional non-profit organization website built with Astro 5.x. The site connects, supports, and advocates for Filipino nurses across the Nordic region.

## Development Commands

| Command                  | Action                                      |
| ------------------------ | ------------------------------------------- |
| `npm install`            | Install dependencies                        |
| `npm run dev`            | Start development server at localhost:4321  |
| `npm run build`          | Build production site to ./dist/            |
| `npm run preview`        | Preview built site locally                  |
| `npm run astro`          | Run Astro CLI commands                      |
| `npm run lint`           | Run ESLint on codebase                      |
| `npm run lint:fix`       | Run ESLint with auto-fix                    |
| `npm run format`         | Format code with Prettier                   |
| `npm run format:check`   | Check code formatting                       |
| `npm run security:audit` | Run npm security audit (moderate threshold) |
| `npm run security:check` | Display security configuration reminder     |

### Quality Workflow

Always run after code changes:

```bash
npm run lint:fix && npm run format
```

This ensures ESLint rules are enforced and Prettier formatting (including Tailwind class sorting) is applied consistently.

## Architecture Overview

### Framework & Tech Stack

- **Astro 5.14.1**: Static site generator with island architecture and partial hydration
- **Tailwind CSS 4.1.13**: Utility-first styling with Vite integration
- **TypeScript**: Full type safety throughout the application
- **ESLint + Prettier**: Code quality with Astro-specific plugins and Tailwind class sorting

### Data Layer Architecture

The project uses a centralized, type-safe data layer in `src/data/` with TypeScript interfaces and the `as const satisfies` pattern for type safety:

- **siteConfig.ts**: Site metadata, SEO settings, social links
- **working-committee/**: Committee member data structured by Nordic country
- **regional-representatives/**: Contact information for regional support
- **Component configs**: Type-safe configurations for reusable components (hero, CTA, registration, statistics)

All data files define TypeScript interfaces first, then use `as const satisfies` to ensure type compliance while preserving literal types.

### Security Configuration

Security is centralized in two places:

- **security.config.js**: Exportable security headers and CSP configuration
- **astro.config.mjs**: Applies security headers to dev server

Key security features:

- Content Security Policy (CSP) with strict directives
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Origin checking enabled
- HTTPS enforcement ready for production

### Component Architecture

14 reusable Astro components in `src/components/` including:

- **Layout components**: Navbar, Footer, PageHeader
- **Content sections**: HeroHeader, Statistics, NordicChapters, WorkingCommittee
- **Interactive elements**: CTABanner, RegistrationSection, TopBanner

Components consume data from the centralized data layer rather than hardcoding content.

### File-Based Routing

Pages in `src/pages/` with automatic route generation:

- **Marketing pages**: index, about, membership, faq, guides-resources, contact-us
- **chapters/**: Individual Nordic country detail pages (7 countries)
- **sitemap.xml.ts**: Dynamic sitemap generation

### Build Configuration

- **CSS code splitting** enabled for performance
- **Vendor chunk separation** (Astro framework isolated)
- **Auto inline stylesheets** for critical CSS
- **Tailwind CSS** integrated via Vite plugin

## Development Guidelines

### Code Organization

- Keep UI components in `src/components/` - they consume data from `src/data/` configs
- Add new pages to `src/pages/` (routes auto-generated from filenames)
- Store reusable data/copy in `src/data/` TypeScript modules instead of hardcoding in components
- Place bundled assets in `src/assets/`, static files in `public/`
- Global styling flows through Tailwind utilities imported in `src/styles/global.css`

### Data Configuration Pattern

When adding new features that require structured data:

1. Create TypeScript interfaces in `types.ts`
2. Create configuration file using `as const satisfies` pattern
3. Export type-safe helper functions for components to consume
4. Update components to use centralized data rather than hardcoded strings

Example pattern from `src/data/siteConfig.ts`:

```typescript
export interface SiteConfig {
  metadata: SiteMetadata;
  // ... other interfaces
}

export const siteConfig = {
  metadata: {
    title: 'Site Title',
    // ... config object
  },
} as const satisfies SiteConfig;
```

### Styling Approach

- **Utility-first** with Tailwind CSS 4.x
- **Responsive design** with mobile-first breakpoints (`sm:`, `md:`, etc.)
- **Class ordering**: Prettier automatically sorts Tailwind classes
- **Custom styles**: Only add to `src/styles/global.css` when Tailwind utilities aren't sufficient

### Security Updates

When modifying security configurations:

- Update both `security.config.js` (for production headers) and `astro.config.mjs` (for dev server)
- Run `npm run security:audit` after dependency updates
- Ensure CSP directives cover any new external origins or assets

### TypeScript Usage

- All configuration files use explicit TypeScript interfaces
- Leverage `as const satisfies` pattern for type safety with literal types
- Keep type definitions co-located with their usage (e.g., `working-committee/types.ts`)
- Use readonly arrays and object properties where data shouldn't be mutated
