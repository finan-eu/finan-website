# SEO Configuration Guide

This guide explains how to configure and use the SEO system in the FiNAN website.

## Configuration File

All SEO settings are centralized in `src/data/seo.config.ts`. This file contains:

- **Basic SEO**: Title, description, site URL, author
- **Open Graph**: Social media sharing configuration
- **Twitter Card**: Twitter-specific sharing settings
- **Meta Tags**: Keywords, robots, theme color, mobile settings
- **Additional**: Canonical URLs, favicon, manifest

## Editing SEO Configuration

To change the website's default SEO settings, edit `src/data/seo.config.ts`:

```typescript
export const seoConfig = {
  basic: {
    title: 'Your Site Title',
    titleTemplate: '%s | Your Brand', // %s is replaced with page title
    description: 'Your site description',
    siteUrl: 'https://yoursite.com',
    author: 'Your Name',
    language: 'en',
  },
  openGraph: {
    type: 'website',
    image: '/images/og-image.jpg', // 1200x630px recommended
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Image description',
    siteName: 'Your Site Name',
    locale: 'en_US',
  },
  twitter: {
    cardType: 'summary_large_image',
    site: 'yourhandle', // Without @
    creator: 'yourhandle', // Without @
    image: '/images/og-image.jpg',
    imageAlt: 'Image description',
  },
  meta: {
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    robots: 'index, follow',
    themeColor: '#1e3a8a', // Browser UI color
  },
};
```

## Using SEO in Pages

### Default SEO (No Props)

If you don't pass any props, the page uses the default configuration:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout>
  <h1>Page Content</h1>
</Layout>
```

### Custom Page Title and Description

Override the title and description for specific pages:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="About Us"
  description="Learn about our organization and mission"
>
  <h1>About Us</h1>
</Layout>
```

**Note**: The title will automatically use the `titleTemplate` from config.
- Input: `"About Us"`
- Output: `"About Us | FiNAN"`

### Custom Social Sharing Image

Use a different image for social media sharing:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Special Event"
  description="Join us for our annual conference"
  image="/images/event-banner.jpg"
>
  <h1>Special Event</h1>
</Layout>
```

### Article/Blog Post SEO

For article pages with publication dates:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="How to Become a Nurse in Finland"
  description="A comprehensive guide to nursing licensure in Finland"
  image="/images/finland-guide.jpg"
  article={true}
  publishedTime="2025-01-15T10:00:00Z"
  modifiedTime="2025-01-20T15:30:00Z"
>
  <article>
    <h1>How to Become a Nurse in Finland</h1>
    <!-- Article content -->
  </article>
</Layout>
```

### Additional Keywords

Add page-specific keywords in addition to defaults:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Nursing Jobs in Sweden"
  description="Find nursing opportunities in Sweden"
  keywords={['sweden healthcare', 'swedish nursing jobs', 'stockholm hospitals']}
>
  <h1>Nursing Jobs in Sweden</h1>
</Layout>
```

### Preventing Indexing

For pages you don't want search engines to index:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Private Member Area"
  noindex={true}
  nofollow={true}
>
  <h1>Member Area</h1>
</Layout>
```

## Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Config default | Page title (formatted with titleTemplate) |
| `description` | `string` | Config default | Meta description for search engines |
| `image` | `string` | Config default | Social sharing image (path or URL) |
| `article` | `boolean` | `false` | Set to `true` for blog/article pages |
| `publishedTime` | `string` | - | ISO 8601 date when article was published |
| `modifiedTime` | `string` | - | ISO 8601 date when article was modified |
| `noindex` | `boolean` | `false` | Prevent search engine indexing |
| `nofollow` | `boolean` | `false` | Prevent search engines from following links |
| `keywords` | `string[]` | - | Additional keywords (appended to defaults) |

## Generated Meta Tags

The SEO system automatically generates:

### Basic Meta Tags
- `<title>` - Page title
- `<meta name="description">` - Page description
- `<link rel="canonical">` - Canonical URL
- `<meta name="robots">` - Indexing instructions
- `<meta name="author">` - Site author
- `<meta name="keywords">` - Search keywords

### Open Graph (Facebook, LinkedIn, etc.)
- `og:title` - Social sharing title
- `og:description` - Social sharing description
- `og:image` - Social sharing image
- `og:url` - Page URL
- `og:type` - Content type (website/article)
- `og:locale` - Language locale
- `og:site_name` - Site name
- `og:image:width` - Image width
- `og:image:height` - Image height
- `og:image:alt` - Image alt text

### Twitter Card
- `twitter:card` - Card type
- `twitter:site` - Site Twitter handle
- `twitter:creator` - Author Twitter handle
- `twitter:title` - Tweet title
- `twitter:description` - Tweet description
- `twitter:image` - Tweet image
- `twitter:image:alt` - Image alt text

### Mobile/PWA Meta Tags
- `theme-color` - Browser UI color
- `mobile-web-app-capable` - Mobile app mode
- `apple-mobile-web-app-status-bar-style` - iOS status bar style

## Social Sharing Image Guidelines

### Recommended Dimensions
- **Open Graph**: 1200 x 630 pixels
- **Twitter Card**: 1200 x 600 pixels
- **Format**: JPG or PNG
- **Max file size**: 8 MB (5 MB for Twitter)

### Best Practices
1. Keep important content centered (safe zone: 1000 x 500px)
2. Avoid placing text near edges
3. Use high-contrast, readable text
4. Test on both light and dark backgrounds
5. Include your logo/branding

## Testing Your SEO

### Tools
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Quick Test
Build the site and check the generated HTML:

```bash
npm run build
cat dist/your-page/index.html | grep -E '<meta|<title'
```

## Helper Functions

The config file provides helper functions you can import:

```typescript
import { getFullUrl, getPageTitle, mergeSEOConfig } from '../data/seo.config';

// Convert relative path to full URL
const imageUrl = getFullUrl('/images/banner.jpg');
// Returns: 'https://finan.eu.com/images/banner.jpg'

// Format title with template
const title = getPageTitle('About');
// Returns: 'About | FiNAN'

// Merge page-specific SEO with defaults
const seo = mergeSEOConfig({
  title: 'Custom Page',
  description: 'Custom description',
});
```

## Troubleshooting

### Social sharing preview not updating
- Clear the cache in the sharing debugger tools
- Ensure the image URL is absolute and publicly accessible
- Check that image dimensions meet minimum requirements

### Wrong title showing
- Verify `titleTemplate` format in `seo.config.ts`
- Check if page is passing custom `title` prop
- Ensure `titleDefault` is set as fallback

### Missing Open Graph tags
- Build the site and inspect the HTML output
- Verify `image` prop is set (either in config or page props)
- Check browser console for errors

## Updates

When you update `seo.config.ts`, the changes apply to all pages using default values. Pages with custom props will keep their overrides.
