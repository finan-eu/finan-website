import type { SitemapConfig } from './types';

/**
 * Manual Sitemap Configuration
 * Centralized sitemap data with full SEO control
 *
 * Priority Guidelines:
 * - 1.0: Homepage (most important)
 * - 0.8: Main navigation pages (About, Membership, Contact)
 * - 0.7: Important content pages (FAQ, Guides & Resources)
 * - 0.6: Regional representation pages
 * - 0.5: Event pages
 * - 0.4: Legal/Terms pages
 */
export const sitemapConfig = {
  urls: [
    // Homepage - Highest priority
    {
      loc: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },

    // Main Navigation Pages - High priority
    {
      loc: '/about/',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: '/membership/',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: '/contact/',
      changefreq: 'monthly',
      priority: 0.8,
    },

    // Content Pages - Medium-high priority
    {
      loc: '/faq/',
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: '/guides-resources/',
      changefreq: 'monthly',
      priority: 0.7,
    },

    // Regional Representation Pages - Medium priority
    {
      loc: '/representation/faroe-islands/',
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: '/representation/finland/',
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: '/representation/greenland/',
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: '/representation/iceland/',
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: '/representation/kingdom-denmark/',
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: '/representation/norway/',
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: '/representation/sweden/',
      changefreq: 'monthly',
      priority: 0.6,
    },

    // Event Pages - Medium priority
    {
      loc: '/triennial-gathering-2026/',
      changefreq: 'weekly',
      priority: 0.5,
    },

    // Legal Pages - Lower priority
    {
      loc: '/terms-agreement/',
      changefreq: 'yearly',
      priority: 0.4,
    },
  ],
} as const satisfies SitemapConfig;
