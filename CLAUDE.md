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
├── components/      # Reusable Astro components (23 components)
├── data/            # TypeScript data files and configurations
│   ├── representation/        # Regional representation data
│   │   ├── committee/         # Committee member data by country
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
├── pages/           # File-based routing (10 pages + 8 representation pages)
│   ├── representation/    # Individual Nordic country pages (8 pages)
│   ├── index.astro
│   ├── about.astro
│   ├── membership.astro
│   ├── faq.astro
│   ├── guides-resources.astro
│   ├── contact.astro
│   ├── terms-agreement.astro
│   ├── triennial-gathering-2026.astro
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

**Core Navigation & Layout:**

- **Navbar.astro** - Main navigation with responsive design
- **Footer.astro** - Site footer with links and information
- **TopBanner.astro** - Top page announcements
- **PageHeader.astro** - Reusable page header with consistent styling

**Hero & Landing Components:**

- **HeroHeader.astro** - Landing page hero section
- **EventHeaderSection.astro** - Event page hero with countdown timer

**Representation & Contact:**

- **NordicRepresentation.astro** - Display all Nordic country representation
- **Committee.astro** - Display committee members by country
- **RepresentationContactSection.astro** - Contact information for regional pages

**Content & Information:**

- **Statistics.astro** - Display organization statistics
- **Pillars.astro** - Organization pillars display
- **OurAdvocacy.astro** - Services and support information (original advocacy section)
- **HowWeHelp.astro** - How We Help section (updated advocacy display)
- **Partners.astro** - Partner organizations showcase
- **Partnership.astro** - Partnership details display
- **PublicationCard.astro** - Publication display card

**Interactive Components:**

- **FAQAccordion.astro** - FAQ accordion component
- **EventSched.astro** - Event schedule accordion component
- **CTABanner.astro** - Call-to-action sections
- **RegistrationSection.astro** - Member registration

**Blog & News:**

- **Blog.astro** - Main blog/news section
- **BlogRepresentation.astro** - Regional blog section for representation pages

**SEO & Data:**

- **StructuredData.astro** - Structured data/schema markup for SEO

### Pages

**Main Pages:**

- **index.astro** - Home page with hero, statistics, representation overview
- **about.astro** - Organization information, mission, committee
- **membership.astro** - Membership benefits and registration
- **faq.astro** - Frequently asked questions
- **guides-resources.astro** - Resources for nurses
- **contact.astro** - Contact information and form
- **terms-agreement.astro** - Terms and agreements page
- **triennial-gathering-2026.astro** - Dedicated event page for FiNAN's 2026 conference
- **sitemap.xml.ts** - Dynamic XML sitemap generation
- **404.astro** - Custom 404 error page

**Representation Pages (8 Nordic Countries/Regions):**

- **representation/denmark.astro** - Denmark representation
- **representation/faroe-islands.astro** - Faroe Islands representation
- **representation/finland.astro** - Finland & Åland representation
- **representation/greenland.astro** - Greenland representation
- **representation/iceland.astro** - Iceland representation
- **representation/kingdom-denmark.astro** - Kingdom of Denmark collective page
- **representation/norway.astro** - Norway representation
- **representation/sweden.astro** - Sweden representation

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
  - **committee/** - Committee member data by country (9 files including types.ts and index.ts)
    - denmarkCommittee.ts
    - faroeIslandsCommittee.ts
    - finlandCommittee.ts
    - greenlandCommittee.ts
    - icelandCommittee.ts
    - norwayCommittee.ts
    - swedenCommittee.ts
    - types.ts (TypeScript interfaces)
    - index.ts (exports all committees)
  - **partnership/** - Partnership data by country
  - **publication/** - Publication data by country
  - **blogRepresentation.ts** - Blog configuration for representation pages
- **events/** - Event-specific data configurations
  - **triennialGathering2026Schedule.ts** - Event schedule data
- **pages/** - Page-specific data configurations
  - **faq/** - FAQ data
- **Component configuration files** - Type-safe configs
  - ctaBannerConfig.ts
  - heroConfig.ts
  - pillarsConfig.ts
  - registrationSectionConfig.ts
  - statisticsConfig.ts

All data files use TypeScript interfaces and the `as const satisfies` pattern for type safety.

### Asset Organization

**Optimized Assets (src/assets/):**
Images in `src/assets/` are automatically optimized by Astro:

- **Committee Images**: `src/assets/images/committee/[country]/`
  - finland/ - Finnish committee member photos
  - sweden/ - Swedish committee member photos
  - norway/ - Norwegian committee member photos
- **Event Images**: `src/assets/images/events/`
  - Event banners and promotional images
- **Gallery Images**: `src/assets/images/gallery/[country]/`
  - sweden/ - Sweden chapter photo gallery images

**Static Assets (public/):**
Assets in `public/` are served as-is without optimization:

- **Flags**: `/assets/flags/` - Country and regional flag SVGs
- **Icons**: `/assets/icons/` - UI icons and graphics
- **Images**: `/assets/images/` - General static images
- **JavaScript**: `/assets/js/` - Public JavaScript files (if any)
- **Favicon**: `/favicon.svg`

**Important**: Always use `src/assets/` for images that benefit from optimization (photos, large images). Use `public/` only for assets that must remain unchanged (SVGs, specific icons).

## Styling Approach

- **Tailwind CSS 4.x** with Vite integration
- Utility-first CSS methodology
- Responsive design with mobile-first approach
- Custom color schemes and typography
- Class sorting automated via Prettier plugin

### Button Styling Conventions

**Primary Buttons**: All primary action buttons (e.g., "Be a Member", CTA buttons) must include the following shadow and transition effects:

```
shadow-lg transition-all duration-200 hover:shadow-xl
```

This creates a consistent, elevated appearance with smooth hover effects across all primary buttons in the application.

## Third-Party Integrations

### Ghost CMS Integration

The project integrates with Ghost CMS (hosted at `puls.finan.eu.com`) for blog content:

- **Library**: `@ts-ghost/content-api` - Type-safe Ghost Content API client
- **Blog Components**: BlogRepresentation.astro fetches posts filtered by country tags
- **Regional Filtering**: Each representation page shows relevant blog posts by tag
- **External Links**: Blog posts link to the external Ghost site with proper security attributes

**Ghost Configuration Location**: `src/lib/ghost.ts`

### PhotoSwipe Image Gallery Integration

The project integrates PhotoSwipe v5.4.4 for image galleries and lightbox functionality:

- **Library**: `photoswipe@5.4.4` - Modern JavaScript image gallery and lightbox
- **Implementation**: Sweden representation page features a "Community Highlights" gallery
- **Features**:
  - Touch-friendly swipe gestures for mobile devices
  - Keyboard navigation support
  - Zoom and pan functionality
  - Smooth opening/closing animations
  - Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
  - Optimized images using Astro's asset pipeline
- **Usage Pattern**:

  ```javascript
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery--[country]',
    children: 'a',
    pswpModule: () => import('photoswipe'),
  });
  lightbox.init();
  ```

- **Integration with Astro**: Uses `astro:page-load` event listener for SPA-like navigation support

**Gallery Location**: `src/pages/representation/sweden.astro`

## Security Features

- Content Security Policy (CSP) headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for camera, microphone, etc.
- Origin checking enabled in Astro config
- External links use `rel="noopener noreferrer"` for security
- Email links properly formatted with `mailto:` protocol and `data-email` attributes

## SEO & Performance

- Comprehensive SEO configuration in siteConfig.ts
- Open Graph and Twitter Card meta tags
- Optimized meta descriptions and keywords
- CSS code splitting for better performance
- Vendor chunk separation
- Auto inline stylesheets for critical CSS

## Special Features

### Event Features (Triennial Gathering 2026)

- **Countdown Timer**: Live JavaScript countdown to event date
- **Event Schedule**: Accordion-based schedule with collapsible days
- **Event Hero**: Responsive hero section with overlay and CTA buttons
- **Registration Section**: Integrated registration forms and links

### Interactive Components

- **Accordion Components**: FAQAccordion and EventSched with smooth animations
- **Photo Galleries**: PhotoSwipe-powered image lightbox with touch gestures and keyboard navigation
- **Dynamic Navigation**: Client-side navigation handling
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Transitions**: CSS transitions and animations throughout

### Accessibility Features

- **Semantic HTML**: Proper heading structure and ARIA attributes
- **Screen Reader Support**: Hidden headings and descriptive labels
- **Keyboard Navigation**: Focus states and keyboard-accessible components
- **Alt Text**: Descriptive alt text for all images

## Development Notes

- Project uses ES modules (`"type": "module"` in package.json)
- All code formatted with Prettier and linted with ESLint
- TypeScript for type safety throughout the application
- Astro's partial hydration for optimal performance
- File-based routing for automatic page generation
- Component-driven architecture with reusable patterns
- Client-side scripts use `astro:page-load` for SPA-like navigation

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
