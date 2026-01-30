# FiNAN Website - Agent Guidelines

This document provides essential information for AI coding agents working on the FiNAN (Filipino Nurses Association in the Nordic Region) website project.

---

## Project Overview

**FiNAN** is the official website for the Filipino Nurses Association in the Nordic Region - a professional non-profit organization connecting, supporting, and advocating for Filipino nurses across Denmark, Faroe Islands, Finland (including Åland), Greenland, Iceland, Norway, and Sweden.

### Key Facts

- **Domain**: https://finan.eu.com
- **Framework**: Astro 5.16.15 (static site generator)
- **Styling**: Tailwind CSS 4.1.13 with Vite integration
- **Language**: TypeScript with strict type checking
- **CMS**: Ghost CMS integration for blog content
- **Package Manager**: npm (with lockfile)

---

## Build, Test, and Development Commands

Run all commands from the project root:

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `http://localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands (e.g., `npm run astro check`) |
| `npm run lint` | Run ESLint across the project |
| `npm run lint:fix` | Auto-fix ESLint issues where possible |
| `npm run format` | Format code with Prettier (includes Tailwind class sorting) |
| `npm run format:check` | Verify formatting without making changes |
| `npm run security:audit` | Run npm audit at moderate threshold |
| `npm run security:check` | Display security checklist reminder |

### Code Quality Workflow

**IMPORTANT**: After making changes, always run:

```bash
npm run lint:fix && npm run format
```

This ensures all ESLint rules are enforced, code formatting is consistent, and Tailwind classes are automatically sorted.

---

## Project Structure

```
/
├── public/                     # Static assets (served as-is)
│   ├── flags/                  # Country flag SVG assets
│   ├── icons/                  # UI icons and graphics
│   ├── images/                 # Static images
│   ├── js/                     # Public JavaScript files
│   │   └── navbar.js           # Client-side navigation script
│   ├── favicon.*               # Favicon variants
│   ├── ogimg_finan.jpg         # Open Graph default image
│   ├── robots.txt              # Search engine directives
│   └── site.webmanifest        # PWA manifest
├── src/
│   ├── assets/                 # Optimized assets (Astro processes these)
│   │   └── images/
│   │       ├── committee/      # Committee member photos by country
│   │       ├── events/         # Event images
│   │       └── gallery/        # Photo gallery images
│   ├── components/             # Reusable Astro components (25+ components)
│   │   ├── feature-section/    # Feature-specific components
│   │   └── *.astro             # UI components
│   ├── data/                   # TypeScript data configurations
│   │   ├── representation/     # Regional representation data
│   │   │   ├── committee/      # Committee member data by country
│   │   │   ├── partnership/    # Partnership data
│   │   │   └── publication/    # Publication data
│   │   ├── pages/              # Page-specific data
│   │   │   └── faq/            # FAQ data
│   │   ├── events/             # Event-specific configurations
│   │   └── *.ts                # Component configs (hero, CTA, etc.)
│   ├── layouts/                # Page layout templates
│   │   └── Layout.astro        # Main layout with SEO, meta tags
│   ├── lib/                    # Utility libraries
│   │   └── ghost.ts            # Ghost CMS API client
│   ├── pages/                  # File-based routing
│   │   ├── representation/     # Nordic country pages (8 pages)
│   │   ├── sitemap.xml.ts      # Dynamic sitemap generation
│   │   └── *.astro             # Main site pages
│   ├── styles/                 # Global CSS styles
│   │   └── global.css          # Tailwind imports + base styles
│   └── env.d.ts                # TypeScript environment types
├── astro.config.mjs            # Astro configuration
├── security.config.js          # Security headers and CSP configuration
├── eslint.config.js            # ESLint flat configuration
├── .prettierrc                 # Prettier configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## Technology Stack

### Core Dependencies

- **Astro 5.16.15** - Static site generator with island architecture
- **Tailwind CSS 4.1.13** - Utility-first CSS framework (via `@tailwindcss/vite`)
- **TypeScript 5.9.2** - Type-safe JavaScript with strict mode

### Key Integrations

- **Ghost CMS** (`@ts-ghost/content-api`) - Blog content management
- **PhotoSwipe 5.4.4** - Image gallery and lightbox functionality
- **astro-seo** - SEO meta tag management
- **@astrojs/sitemap** - XML sitemap generation

### Development Tools

- **ESLint 9.x** with `eslint-plugin-astro` for Astro-specific linting
- **Prettier 3.x** with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- **@astrojs/check** - Astro TypeScript checking

---

## Code Organization and Architecture

### Component Architecture

Components follow a modular, composable pattern:

- **Layout Components**: `Layout.astro` provides the main page shell with SEO, navigation, and footer
- **Page Components**: Each page in `src/pages/` composes sections using imported components
- **UI Components**: Reusable components in `src/components/` follow single-responsibility principle
- **Data-Driven**: All copy/content is centralized in `src/data/` TypeScript modules

### Data Layer

The project uses a centralized, type-safe data architecture:

```typescript
// Example: src/data/heroConfig.ts
export const heroConfig = {
  title: 'Supporting Filipino Nurses in the Nordics',
  description: '...',
  buttons: {
    primary: { text: 'Be a Member', url: '/membership' },
    secondary: { text: 'Contact Us', url: '/contact' },
  },
} as const;
```

All data files use:
- TypeScript interfaces for type safety
- `as const satisfies` pattern for readonly configs
- Descriptive naming with clear hierarchy

### Key Configuration Files

**`src/data/siteConfig.ts`** - Central SEO and site metadata configuration including:
- Basic SEO (title, description, site URL)
- Open Graph settings
- Twitter Card configuration
- Organization structured data
- Helper functions for URL/title generation

**`astro.config.mjs`** - Astro configuration with:
- Tailwind CSS via Vite plugin
- Security headers middleware
- CSS code splitting
- Vendor chunking

**`security.config.js`** - Security configuration:
- Content Security Policy (CSP) definitions
- Security headers (X-Frame-Options, etc.)
- Ghost CMS image source allowlist
- Security checklist

---

## Coding Style Guidelines

### Astro Components

- Use semantic HTML with accessible landmarks
- Indent markup with 2 spaces
- Keep props typed with interfaces when using TypeScript
- Use slots for layout composition
- Prefer slots over deeply nested props
- Avoid inline `<script>` tags; place reusable behavior in `public/js/`

### Tailwind CSS Conventions

- Utility-first approach; avoid custom CSS unless necessary
- Group classes by breakpoint then state: `sm:` → `md:` → `lg:` then `hover:`/`focus:`
- Use Prettier plugin for automatic class sorting
- Keep class lists readable; split into multiple lines when they grow large

**Button Styling Convention** - Primary buttons must include:
```
shadow-lg transition-all duration-200 hover:shadow-xl
```

### TypeScript Conventions

- Use strict type checking (configured in `tsconfig.json`)
- Add explicit types for nested or reused data structures
- Prefer `as const` for read-only config data
- Avoid `any`; use narrow union types
- Keep data modules export-only (no runtime side effects)

### Import Order

1. External packages
2. Internal modules
3. Styles/assets

Use type-only imports (`import type`) when importing types.

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroHeader.astro` |
| Utility functions | camelCase | `getFullUrl()` |
| Data modules | camelCase | `siteConfig.ts` |
| CSS classes (custom) | kebab-case | `min-h-screen-mobile` |
| Image files | kebab-case | `floro-cubelo.jpg` |

---

## Testing Strategy

**Current State**: No automated test runner is configured.

**Manual QA Checklist** (required after meaningful UI changes):
- [ ] Confirm layout on mobile, tablet, and desktop breakpoints
- [ ] Check navigation and mobile menu interactions
- [ ] Validate external links open correctly with `rel` attributes
- [ ] Test form submissions (if applicable)
- [ ] Verify image loading and optimization
- [ ] Check for console errors
- [ ] Run `npm run lint` and `npm run format:check`

**Future Testing**: If tests are added, colocate them under `src/` with naming pattern `<feature>.spec.{js,ts}`.

---

## Asset Handling

### Optimized Assets (`src/assets/`)

Images placed here are automatically optimized by Astro:
- Compression without quality loss
- Format conversion (WebP, AVIF) with fallbacks
- Responsive image generation
- Build-time validation (fails if images missing)

**Use for**: Committee photos, event images, gallery photos

**Import Pattern**:
```typescript
import floroCubeloImage from '../../../assets/images/committee/finland/floro-cubelo.jpg';

const config = {
  imageSrc: floroCubeloImage,  // Use imported reference, not string path
};
```

### Static Assets (`public/`)

Served as-is without optimization:
- Flags, icons, favicons
- JavaScript files
- Files that must preserve exact paths

**Never use string paths for images** - always import from `src/assets/` for optimization benefits.

---

## Security Considerations

### Implemented Security Measures

1. **Content Security Policy (CSP)** - Defined in `security.config.js`
2. **Security Headers**:
   - `X-Frame-Options: DENY` (clickjacking protection)
   - `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` for camera, microphone, geolocation
3. **Origin Checking** - Enabled in Astro config
4. **External Links** - Use `rel="noopener noreferrer"`

### Ghost CMS Security Notes

The CSP includes broad wildcard patterns for Ghost CMS image sources:
- `https://*.ghost.io`, `https://*.ghost.org`, `https://*.ghostcdn.com`
- `https://*.cloudfront.net` (broad wildcard - documented trade-off)

These are necessary for Ghost Pro's dynamic CDN usage but represent a security trade-off. See `security.config.js` for detailed documentation.

### Environment Variables

Sensitive configuration in `.env` (not committed):
- `GHOST_URL` - Ghost CMS instance URL
- `GHOST_CONTENT_API_KEY` - Read-only API key

See `.env.example` for template.

---

## Third-Party Integrations

### Ghost CMS (Blog)

- **Location**: `src/lib/ghost.ts`
- **Library**: `@ts-ghost/content-api`
- **Purpose**: Fetch blog posts for display on site and representation pages
- **Regional Filtering**: Posts filtered by country tags for representation pages
- **External Links**: Blog posts link to `puls.finan.eu.com` with proper security attributes

### PhotoSwipe (Image Galleries)

- **Library**: `photoswipe@5.4.4`
- **Usage**: Sweden representation page features Community Highlights gallery
- **Features**: Touch gestures, keyboard navigation, zoom/pan, responsive grid
- **Implementation**: Uses `astro:page-load` event for SPA-like navigation support

---

## Deployment

The site is configured for static deployment:

1. **Build Output**: `./dist/` directory
2. **Site URL**: `https://finan.eu.com` (configured in `astro.config.mjs`)
3. **Sitemap**: Generated at `/sitemap.xml` via `src/pages/sitemap.xml.ts`
4. **Noindex on Preview**: Automatic `noindex,nofollow` on `.pages.dev` domains

**Build Process**:
```bash
npm run build
```

Output in `dist/` is ready for static hosting (Cloudflare Pages, Netlify, Vercel, etc.).

---

## Common Tasks

### Adding a New Page

1. Create `.astro` file in `src/pages/`
2. Import `Layout` from `../layouts/Layout.astro`
3. Compose page using existing components
4. Add page-specific data to `src/data/pages/` if needed
5. Update sitemap configuration if necessary

### Adding Committee Member Photos

See `.opencode/rules/committee-images.md` for detailed instructions:

1. Place image in `src/assets/images/committee/[country]/`
2. Name file using kebab-case: `first-last.jpg`
3. Import in committee file: `import firstLastImage from '...'`
4. Use imported reference in `imageSrc` property
5. Run `npm run build` to verify

### Modifying SEO

Edit `src/data/siteConfig.ts`:
- Update `seoConfig.basic` for site-wide defaults
- Update `seoConfig.openGraph` for social sharing
- Update `seoConfig.meta.keywords` for search keywords

Individual pages can override via `Layout` props:
```astro
<Layout title="Page Title" description="Custom description">
```

---

## Additional Resources

- **Astro Documentation**: https://docs.astro.build
- **Tailwind CSS Documentation**: https://tailwindcss.com
- **Ghost CMS API Docs**: https://ghost.org/docs/content-api/
- **CLAUDE.md**: Additional development context and component documentation

---

*Last updated: January 2026*
