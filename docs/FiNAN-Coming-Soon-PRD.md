# Product Requirements Document (PRD)

**Project Name:** FiNAN Website – Coming Soon Landing Page  
**Prepared by:** [Your Name]  
**Date:** [Insert Date]

---

## 1. Project Overview

FiNAN (Filipino Nurses Association in the Nordics) is a non-profit organization dedicated to uniting, empowering, and advocating for Filipino nurses across the Nordic region.

This project will create a **Coming Soon landing page** using **Astro JS** with **Tailwind CSS**. The page will consist of two main components:

1. A **Top Banner** announcement bar.
2. A **Hero Header** with headline, description, and background image.

---

## 2. Objectives

- Provide a professional landing page to represent FiNAN while the full site is being developed.
- Clearly communicate FiNAN’s purpose and mission.
- Direct users to the existing site **filnan.com** for more information.
- Build reusable and maintainable `.astro` components.

---

## 3. Scope

### In-Scope

- Creation of two Astro components:
  - `TopBanner.astro`
  - `HeroHeader.astro`
- Responsive design using Tailwind CSS utility classes.
- Simple routing with `index.astro` assembling the two components.

### Out-of-Scope

- Navigation, footer, or additional sections.
- CMS or backend/API integrations.
- Styling outside of Tailwind CSS utilities.

---

## 4. Component Architecture

### File Structure (proposed)

```
src/
 └── components/
      ├── TopBanner.astro
      ├── HeroHeader.astro
 └── pages/
      └── index.astro
```

### TopBanner.astro

- **Purpose:** Display a site-wide announcement.
- **Content:**
  > “We are currently building a better website for FiNAN to better serve Filipino nurses in the Nordic Region.”
- **Style:**
  - Full width, small height (`py-2 px-4`).
  - Background: Dark blue (`bg-blue-900`).
  - Text: White, centered, small font size (`text-white text-sm md:text-base`).

### HeroHeader.astro

- **Purpose:** Communicate FiNAN’s mission.
- **Content:**
  - Background image with dark blue overlay (`relative bg-cover bg-center`).
  - Heading:
    > “Uniting & Empowering Filipino Nurses in the Nordics”
  - Subheading:
    > “FiNAN is a non-profit organization that connects, supports, and advocates for Filipino nurses across the Nordic region — providing trusted guidance on licensing, cultural integration, and professional growth.”
  - Info line with link:
    > “For more info you can visit our current website [filnan.com](https://filnan.com).”
- **Style:**
  - Full-height hero (`min-h-[80vh] md:h-screen`).
  - Overlay: Tailwind gradient or pseudo-element (`bg-blue-900/70`).
  - Text: White, constrained to `max-w-screen-xl mx-auto px-6`.
  - Typography:
    - Title: `text-4xl md:text-6xl font-bold`.
    - Subheading: `text-lg md:text-xl mt-4`.
    - Info line: `text-sm text-gray-200 mt-6`.

### index.astro

- **Role:** Imports and renders `TopBanner` and `HeroHeader`.
- **Wrapper:** Minimal `<main>` wrapper.

---

## 5. Technical Requirements

- **Framework:** Astro JS.
- **Styling:** Tailwind CSS (pre-installed).
- **Deployment:** Static hosting (Netlify, Vercel, etc.).
- **Accessibility:** High contrast text, semantic HTML.

---

## 6. Success Criteria

- Top banner and hero section display correctly on desktop and mobile.
- Users can clearly understand FiNAN’s mission.
- Users can navigate easily to **filnan.com**.
- The Astro components are modular and reusable.
