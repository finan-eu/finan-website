# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website project for "v2-finan-website" using the basic Astro starter template. The project follows standard Astro conventions and project structure.

## Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview built site locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture

- **Framework**: Astro 5.x (static site generator with island architecture)
- **Structure**: Standard Astro project layout
  - `src/pages/` - File-based routing for pages
  - `src/layouts/` - Reusable layout components
  - `src/components/` - Astro components
  - `src/assets/` - Static assets (images, etc.)
  - `public/` - Static files served as-is

- **Component Pattern**: Uses `.astro` files which combine frontmatter (JavaScript/TypeScript), HTML template, and scoped CSS
- **Layouts**: Main layout is `Layout.astro` which provides the HTML document structure
- **Entry Point**: `index.astro` imports and uses the Welcome component within the Layout

## Key Files

- `astro.config.mjs` - Astro configuration (currently using default settings)
- `src/layouts/Layout.astro` - Base HTML document structure
- `src/pages/index.astro` - Home page that imports Welcome component
- `src/components/Welcome.astro` - Main landing page component with styling

## Development Notes

- Project uses ES modules (`"type": "module"` in package.json)
- TypeScript checking enabled in Astro config
- No additional integrations or frameworks currently configured
- Uses standard web technologies (HTML, CSS, JavaScript) without external CSS frameworks