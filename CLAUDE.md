# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FiNAN (Filipino Nurses Association in the Nordic Region) is a professional non-profit organization website built with Astro 5.x. The site connects, supports, and advocates for Filipino nurses across the Nordic region, providing guidance on licensing, cultural integration, and professional development.

## Development Commands

| Command                  | Action                                     |
| ------------------------ | ------------------------------------------ |
| `npm install`            | Install dependencies                       |
| `npm run dev`            | Start development server at localhost:4321 |
| `npm run build`          | Build production site to ./dist/           |
| `npm run preview`        | Preview built site locally                 |
| `npm run astro`          | Run Astro CLI commands                     |
| `npm run lint`           | Run ESLint on codebase                     |
| `npm run lint:fix`       | Run ESLint with auto-fix                   |
| `npm run format`         | Format code with Prettier                  |
| `npm run format:check`   | Check code formatting                      |
| `npm run security:audit` | Run npm security audit                     |

## Architecture

- **Framework**: Astro 5.15.9 (static site generator with island architecture)
- **Styling**: Tailwind CSS 4.1.13 with Vite integration
- **TypeScript**: Full TypeScript support with type checking enabled
- **Code Quality**: ESLint + Prettier with Astro-specific plugins

### Directory Structure

```
src/
├── assets/          # Static assets optimized by Astro
├── components/      # Reusable Astro components (19 components)
├── data/            # TypeScript data files and configurations
│   ├── representation/        # Regional representation data
│   │   ├── working-committee/ # Committee member data by country
│   │   ├── partnership/       # Partnership data
│   │   └── publication/       # Publication data
│   ├── pages/                 # Page-specific data configurations
│   │   └── faq/               # FAQ data
│   ├── siteConfig.ts          # Site metadata and SEO config
│   ├── ctaBannerConfig.ts     # CTA banner configuration
│   ├── heroConfig.ts          # Hero section configuration
│   ├── pillarsConfig.ts       # Organizational pillars configuration
│   ├── registrationSectionConfig.ts
│   └── statisticsConfig.ts
├── layouts/         # Page layout templates
├── pages/           # File-based routing (7 pages + 8 representation pages)
│   ├── representation/    # Individual Nordic country pages (8 pages)
│   ├── index.astro
│   ├── about.astro
│   ├── membership.astro
│   ├── faq.astro
│   ├── guides-resources.astro
│   ├── contact.astro
│   ├── sitemap.xml.ts
│   └── 404.astro
├── scripts/         # Client-side JavaScript
└── styles/          # Global CSS styles

public/
├── flags/           # Country flag images
├── icons/           # Icon assets
├── images/          # General images
├── js/              # Public JavaScript files
└── favicon.svg
```

### Key Components

- **PageHeader.astro** - Reusable page header with consistent styling
- **HeroHeader.astro** - Landing page hero section
- **Navbar.astro** - Main navigation with responsive design
- **Footer.astro** - Site footer with links and information
- **NordicRepresentation.astro** - Display all Nordic country representation
- **WorkingCommittee.astro** - Display committee members by country
- **RegionalRepresentation.astro** - Regional contact information (country-specific)
- **RegionalRepresentationSection.astro** - Regional representation container
- **Statistics.astro** - Display organization statistics
- **Partners.astro** - Partner organizations showcase
- **Partnership.astro** - Partnership details display
- **HowWeHelp.astro** - Services and support information
- **CTABanner.astro** - Call-to-action sections
- **RegistrationSection.astro** - Member registration
- **TopBanner.astro** - Top page announcements
- **Blog.astro** - Blog/news section
- **FAQAccordion.astro** - FAQ accordion component
- **Pillars.astro** - Organization pillars display
- **PublicationCard.astro** - Publication display card

### Pages

- **index.astro** - Home page with hero, statistics, representation overview
- **about.astro** - Organization information, mission, working committee
- **membership.astro** - Membership benefits and registration
- **faq.astro** - Frequently asked questions
- **guides-resources.astro** - Resources for nurses
- **contact.astro** - Contact information and form
- **sitemap.xml.ts** - Dynamic XML sitemap generation
- **404.astro** - Custom 404 error page
- **representation/\*.astro** - Individual pages for 8 Nordic countries/regions:
  - denmark.astro
  - faroe-islands.astro
  - finland.astro
  - greenland.astro
  - iceland.astro
  - kingdom-denmark.astro (collective page)
  - norway.astro
  - sweden.astro

## Configuration Files

### Astro Configuration (astro.config.mjs)

- Tailwind CSS integration via Vite plugin
- Security headers (CSP, X-Frame-Options, etc.)
- CSS code splitting and vendor chunking
- Origin checking enabled for security

### Code Quality Tools

- **eslint.config.js** - ESLint flat config with Astro plugin and Prettier integration
- **.prettierrc** - Prettier configuration with Astro and Tailwind CSS plugins
  - Semi-colons enabled
  - Single quotes preferred
  - 2-space indentation
  - Tailwind class sorting enabled

### TypeScript

- Full type safety across data configurations
- Type definitions in `src/data/*/types.ts`
- Interfaces for all configuration objects

## Data Architecture

The project uses a centralized, type-safe data layer:

- **siteConfig.ts** - Site metadata, SEO settings, social links
- **representation/** - Regional representation data
  - **working-committee/** - Committee member data by country (7 countries)
  - **partnership/** - Partnership data by country
  - **publication/** - Publication data by country
- **pages/** - Page-specific data configurations
  - **faq/** - FAQ data
- **Configuration files** - Type-safe configs for components
  - ctaBannerConfig.ts
  - heroConfig.ts
  - pillarsConfig.ts
  - registrationSectionConfig.ts
  - statisticsConfig.ts

All data files use TypeScript interfaces and the `as const satisfies` pattern for type safety.

## Styling Approach

- **Tailwind CSS 4.x** with Vite integration
- Utility-first CSS methodology
- Responsive design with mobile-first approach
- Custom color schemes and typography
- Class sorting automated via Prettier plugin

## Security Features

- Content Security Policy (CSP) headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for camera, microphone, etc.
- Origin checking enabled in Astro config

## SEO & Performance

- Comprehensive SEO configuration in siteConfig.ts
- Open Graph and Twitter Card meta tags
- Optimized meta descriptions and keywords
- CSS code splitting for better performance
- Vendor chunk separation
- Auto inline stylesheets for critical CSS

## Development Notes

- Project uses ES modules (`"type": "module"` in package.json)
- All code formatted with Prettier and linted with ESLint
- TypeScript for type safety throughout the application
- Astro's partial hydration for optimal performance
- File-based routing for automatic page generation
- Component-driven architecture with reusable patterns

## Code Quality Workflow

**IMPORTANT**: After making changes, always run an ESLint check with fixes and then apply Prettier formatting so that all changes are clean and consistent.

```bash
npm run lint:fix && npm run format
```

This ensures:

- All ESLint rules are enforced and auto-fixable issues are resolved
- Code formatting is consistent across the codebase
- Tailwind CSS classes are automatically sorted
- Astro-specific linting rules are applied
