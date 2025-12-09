# FiNAN Website

The official website for **FiNAN (Filipino Nurses Association in the Nordic Region)** - a professional non-profit organization connecting, supporting, and advocating for Filipino nurses across the Nordic region.

## About FiNAN

FiNAN provides guidance on licensing, cultural integration, and professional development for Filipino nurses working in Denmark, Faroe Islands, Finland (including Åland), Greenland, Iceland, Norway, and Sweden.

## 🚀 Project Structure

This is an Astro 5.x static site with the following structure:

```text
/
├── public/
│   ├── flags/              # Country flag SVG assets
│   ├── icons/              # UI icons and graphics
│   ├── images/             # Static images
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/         # Optimized images (committee photos, events)
│   ├── components/         # Reusable Astro components (25 components)
│   ├── data/               # TypeScript data configurations
│   │   ├── representation/ # Regional representation data
│   │   ├── pages/          # Page-specific data
│   │   └── *.ts            # Component configurations
│   ├── layouts/            # Page layout templates
│   ├── pages/              # File-based routing
│   │   ├── representation/ # Nordic country pages (8 pages)
│   │   └── *.astro         # Main site pages
│   ├── scripts/            # Client-side JavaScript
│   └── styles/             # Global CSS styles
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                     |
| :----------------------- | :----------------------------------------- |
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

- **Framework**: Astro 5.15.9 (static site generator)
- **Styling**: Tailwind CSS 4.1.13
- **Language**: TypeScript (full type safety)
- **Code Quality**: ESLint + Prettier
- **CMS Integration**: Ghost CMS (blog content)

## 📖 Documentation

For detailed development guidelines, architecture, and component documentation, see [CLAUDE.md](./CLAUDE.md).

## 🌐 Website Features

- **Nordic Representation**: Dedicated pages for 8 Nordic countries/regions
- **Working Committee**: Display of leadership team by country
- **Blog Integration**: Ghost CMS integration for news and updates
- **Event Management**: Triennial Gathering 2026 event page with countdown
- **Membership System**: Registration and member benefits
- **Resources**: Guides and FAQ for nurses
- **Multilingual Support**: Content for diverse Nordic regions

## 🔒 Security

The site implements comprehensive security headers including CSP, X-Frame-Options, and proper origin checking.

## 👀 Want to learn more about Astro?

Feel free to check [Astro's documentation](https://docs.astro.build) or join the [Astro Discord server](https://astro.build/chat).
