/**
 * Sitemap Configuration Types
 * Defines the structure for manual sitemap generation with SEO metadata
 */

/**
 * Change frequency for sitemap entries
 * Tells search engines how often the page content is likely to change
 */
export type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

/**
 * Individual sitemap URL entry
 */
export interface SitemapUrl {
  /** Relative path from site root (e.g., '/', '/about/', '/contact/') */
  loc: string;
  /** Last modification date (ISO 8601 format recommended) */
  lastmod?: string;
  /** How frequently the page is likely to change */
  changefreq?: ChangeFrequency;
  /** Priority of this URL relative to other URLs (0.0 to 1.0) */
  priority?: number;
}

/**
 * Complete sitemap configuration
 */
export interface SitemapConfig {
  /** Array of URL entries */
  urls: readonly SitemapUrl[];
}
