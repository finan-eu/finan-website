![FiNAN logo](public/finan-logo.svg)

# FiNAN Website

The official website for **FiNAN (Filipino Nurses Association in the Nordic Region)** - a registered non-profit organization connecting, supporting, and advocating for Filipino nurses across the Nordic region.

## About FiNAN

FiNAN provides guidance on licensing, cultural integration, and professional development for Filipino nurses working in Denmark, Faroe Islands, Finland (including Åland), Greenland, Iceland, Norway, and Sweden.

The organization is a registered non-profit across the Nordic Region:
- **Finland**: Patentti- ja rekisterihallitus (PRH) - Y-tunnus: 3084026-2
- **Denmark**: Erhvervsstyrelsen - CVR number: 40349367
- **Sweden**: Skatteverket - Organisation number: 802537-7097
- **Iceland**: Ríkisskattstjóri - Registration number: 5208190450

## Website Features

- **Nordic Representation**: Dedicated pages for 8 Nordic countries/regions
- **Working Committee**: Display of leadership team by country
- **Blog Integration**: Ghost CMS integration for news and updates
- **Event Management**: Triennial Gathering 2026 event page with countdown
- **Membership System**: Registration and member benefits
- **Resources**: Guides and FAQ for nurses
- **Multilingual Support**: Content for diverse Nordic regions
- **View Transitions**: Seamless, app-like page navigation using Astro `<ClientRouter />` for faster perceived load times and state preservation

## Tech Stack

- **Framework**: Astro 5.16.15 (static site generator)
- **Styling**: Tailwind CSS 4.1.13
- **Language**: TypeScript (full type safety)
- **Deployment**: Cloudflare Pages
- **Code Quality**: ESLint + Prettier
- **CMS Integration**: Ghost CMS (blog content)

## Project Structure

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
│   ├── components/         # Reusable Astro components
│   ├── data/               # TypeScript data configurations
│   │   ├── representation/ # Regional representation data
│   │   ├── pages/          # Page-specific data
│   │   └── *.ts            # Component configurations
│   ├── layouts/            # Page layout templates
│   ├── pages/              # File-based routing
│   │   ├── representation/ # Nordic country pages (8 pages)
│   │   └── *.astro         # Main site pages
│   ├── lib/                # Utility libraries (Ghost CMS API client)
│   └── styles/             # Global CSS styles
└── package.json
```

## How to Run It

1. **Clone the repository:**
   ```bash
   git clone https://github.com/finan-eu/finan-website.git
   cd finan-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

## All Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                     |
| :----------------------- | :----------------------------------------- |
| `npm install`            | Install dependencies                       |
| `npm run dev`            | Start development server at localhost:4321 |
| `npm run build`          | Build production site to ./dist/           |
| `npm run preview`        | Preview built site locally                 |
| `npm run astro`          | Run Astro CLI commands                     |
| `npm run check`          | Run Astro + TypeScript checks              |
| `npm run lint`           | Run ESLint on codebase                     |
| `npm run lint:fix`       | Run ESLint with auto-fix                   |
| `npm run format`         | Format code with Prettier                  |
| `npm run format:check`   | Check code formatting                      |
| `npm run check:all`      | Run full quality gate (lint+format+check+build) |
| `npm run security:audit` | Run npm security audit                     |
| `npm run security:check` | Show project security checklist reminder   |

## Git Hooks (Husky)

This project uses Husky to run automated checks during Git workflows.

- `pre-commit`: Runs `lint-staged` on staged files only for fast feedback.
  - `*.{js,jsx,ts,tsx,astro}`: `eslint --fix` then `prettier --write`
  - `*.{json,md,css,yml,yaml}`: `prettier --write`
- `pre-push`: Runs full project checks via `npm run check:all`:
  - `npm run lint`
  - `npm run format:check`
  - `npm run check`
  - `npm run build`

Hooks are installed automatically after `npm install` through the `prepare` script.

Emergency bypass (use sparingly): add `--no-verify` to `git commit` or `git push`.

## Documentation

For detailed development guidelines, architecture, and component documentation, see [FiNAN's Documentation site](https://docs.finan.eu.com).

## Security

The site implements comprehensive security headers including CSP, X-Frame-Options, and proper origin checking.

## Contact Info

For inquiries, please contact us at [info@finan.eu.com](mailto:info@finan.eu.com)
