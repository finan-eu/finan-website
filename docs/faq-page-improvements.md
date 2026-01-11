# Potential Improvements for faq.astro

## ✅ 1. SEO Enhancements

- Add FAQ schema markup (structured data) for better search engine visibility
- FAQs are perfect for rich snippets in Google search results
- Would help with voice search optimization

## 2. Hero Image Specificity

- Currently uses generic hero-image.webp like most pages
- Consider using a FAQ-specific hero image (like about.astro and membership.astro could also benefit
  from this)

## ✅ 3. Enhanced Accessibility

- Add ARIA labels for better screen reader support
- Consider adding skip-to-content links for keyboard navigation
- The `<h2>` inside `<li>` elements might cause heading hierarchy issues (jumping from h1 in PageHeader to
  h2)

## ✅ 4. Interactive Features

- ✅ Convert to an accordion/collapsible FAQ pattern to reduce initial page length
<!-- - Add search/filter functionality if FAQ list grows -->
- Add anchor links to individual FAQs for easy sharing

## 5. Visual Improvements

- Add icons (question mark, lightbulb, etc.) next to questions
- Consider a two-column layout on desktop for better space utilization
- Add a subtle hover effect on FAQ items

## ✅ 6. Content Organization

- Group FAQs by category (e.g., "About FiNAN", "Membership", "Recruitment")
<!-- - Add a table of contents at the top for quick navigation -->
- Consider a "Still have questions?" contact section at the bottom

## 7. Code Consistency

- ✅ The CTABanner placement is inconsistent (inside `<section>` here vs outside in about.astro)
- ✅ Footer placement (inside `<main>` here vs outside in about.astro)

## 8. Data Structure Enhancement

- Add categories/tags to FAQ data for future filtering
- Add optional metadata like lastUpdated or priority
