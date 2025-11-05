# FiNAN Website

<div align="center">

**Filipino Nurses Association in the Nordic Region**

A professional non-profit organization connecting, supporting, and advocating for Filipino nurses across the Nordic region.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

</div>

## 📋 Overview

FiNAN (Filipino Nurses Association in the Nordic Region) is a modern, performant website built with Astro 5.x. The platform serves as a central hub for Filipino nurses working across Nordic countries, providing essential resources, guidance on licensing and registration, cultural integration support, and professional development opportunities.

## ✨ Features

- **Nordic Chapter Pages** - Dedicated pages for 7 Nordic countries/regions with localized information
- **Member Resources** - Comprehensive guides for licensing, cultural integration, and career development
- **Working Committee** - Transparent organizational structure with committee member profiles
- **Regional Representatives** - Easy access to regional support contacts
- **Membership System** - Clear membership benefits and registration process
- **FAQ Section** - Answers to common questions about nursing in the Nordic region
- **Responsive Design** - Mobile-first approach with optimized experience across all devices
- **SEO Optimized** - Comprehensive meta tags, Open Graph, and Twitter Card support
- **Security First** - Robust security headers including CSP, X-Frame-Options, and more
- **Performance Focused** - Static site generation with optimal loading speeds

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd finan-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 📦 Available Commands

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

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.15.3 - Static site generator with island architecture
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1.13 - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org) - Full type safety throughout
- **Code Quality**:
  - [ESLint](https://eslint.org) - Linting with Astro-specific plugins
  - [Prettier](https://prettier.io) - Code formatting with Astro and Tailwind plugins

## 📁 Project Structure

```
finan-website/
├── public/                 # Static assets
│   ├── flags/             # Country flag images
│   ├── icons/             # Icon assets
│   ├── images/            # General images
│   └── favicon.svg
├── src/
│   ├── assets/            # Optimized static assets
│   ├── components/        # Reusable Astro components (14 components)
│   │   ├── PageHeader.astro
│   │   ├── HeroHeader.astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── NordicChapters.astro
│   │   ├── WorkingCommittee.astro
│   │   └── ...
│   ├── data/              # TypeScript data files
│   │   ├── working-committee/
│   │   ├── regional-representatives/
│   │   ├── siteConfig.ts
│   │   ├── ctaBannerConfig.ts
│   │   ├── heroConfig.ts
│   │   └── ...
│   ├── layouts/           # Page layout templates
│   ├── pages/             # File-based routing
│   │   ├── chapters/      # Nordic country pages
│   │   ├── index.astro    # Home page
│   │   ├── about.astro
│   │   ├── membership.astro
│   │   ├── faq.astro
│   │   ├── guides-resources.astro
│   │   ├── contact-us.astro
│   │   └── sitemap.xml.ts
│   ├── scripts/           # Client-side JavaScript
│   └── styles/            # Global CSS styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Project dependencies
```

## 🏗️ Architecture

### Component-Driven Design

The project follows a component-driven architecture with 14 reusable Astro components:

- **Layout Components**: PageHeader, HeroHeader, Navbar, Footer
- **Content Components**: NordicChapters, WorkingCommittee, RegionalRepresentatives
- **Feature Components**: Statistics, Partners, HowWeHelp, Blog
- **Action Components**: CTABanner, RegistrationSection, TopBanner

### Type-Safe Data Layer

All data configurations use TypeScript interfaces with the `as const satisfies` pattern for complete type safety:

- Site metadata and SEO settings
- Working committee members by country
- Regional representatives
- Component configurations

### Styling Approach

- **Utility-First CSS**: Tailwind CSS 4.x with Vite integration
- **Responsive Design**: Mobile-first approach
- **Automated Sorting**: Tailwind classes automatically sorted via Prettier plugin
- **Custom Theming**: Brand-specific color schemes and typography

## 🔒 Security Features

- Content Security Policy (CSP) headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for camera, microphone, etc.
- Origin checking enabled

## ⚡ Performance

- **Static Site Generation**: Pre-rendered pages for optimal speed
- **CSS Code Splitting**: Automatic splitting for better caching
- **Vendor Chunking**: Separate chunks for third-party dependencies
- **Critical CSS Inlining**: Auto-inline stylesheets for above-the-fold content
- **Island Architecture**: Partial hydration for interactive components

## 🎨 Development Guidelines

### Code Quality Workflow

After making changes, always run:

```bash
npm run lint:fix && npm run format
```

This ensures:
- ESLint rules are enforced and auto-fixable issues are resolved
- Code formatting is consistent across the codebase
- Tailwind CSS classes are automatically sorted
- Astro-specific linting rules are applied

### TypeScript

- Full type safety across all data configurations
- Type definitions in `src/data/*/types.ts`
- Interfaces for all configuration objects

### Component Guidelines

- Use Astro components for static content
- Keep components focused and reusable
- Follow the existing component patterns
- Document complex component logic

## 📝 Content Management

The site uses a centralized data management approach:

1. **Site Configuration**: `src/data/siteConfig.ts` - Site metadata and SEO
2. **Working Committee**: `src/data/working-committee/` - Committee member data by country
3. **Regional Representatives**: `src/data/regional-representatives/` - Regional contacts
4. **Component Configs**: Various config files for reusable components

## 🌐 Deployment

Build the production site:

```bash
npm run build
```

The optimized site will be generated in the `./dist/` directory, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

Preview the production build locally:

```bash
npm run preview
```

## 🤝 Contributing

1. Follow the established code style and conventions
2. Run `npm run lint:fix && npm run format` before committing
3. Ensure TypeScript types are properly defined
4. Test responsive design across different screen sizes
5. Maintain security best practices

## 📄 License

[Add appropriate license information]

## 📧 Contact

For questions or support, please visit the [Contact Us](./contact-us) page on the website.

---

<div align="center">

**Built with ❤️ for Filipino Nurses in the Nordic Region**

</div>
