/**
 * Site metadata configuration with SEO content
 */
export interface SiteMetadata {
  /** Main website title displayed in browser tab and search results */
  title: string;
  /** Brief description of the website for SEO and social sharing */
  description: string;
  /** Website URL for canonical links and social sharing */
  url: string;
  /** Website author/organization name */
  author: string;
  /** Default language code (ISO 639-1) */
  language: string;
}

/**
 * Social media and Open Graph configuration
 */
export interface SocialConfig {
  /** Twitter/X handle without @ symbol */
  twitter?: string;
  /** Facebook page URL */
  facebook?: string;
  /** LinkedIn profile/company URL */
  linkedin?: string;
  /** GitHub repository or profile URL */
  github?: string;
  /** Default social sharing image path */
  image?: string;
}

/**
 * SEO-specific configuration options
 */
export interface SEOConfig {
  /** Default meta keywords for pages without specific keywords */
  keywords: readonly string[];
  /** Open Graph type (website, article, etc.) */
  ogType: 'website' | 'article' | 'blog' | 'profile';
  /** Twitter card type for social sharing */
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  /** Robots meta tag default value */
  robots: string;
}

/**
 * Complete site configuration combining all metadata
 */
export interface SiteConfig {
  /** Core site metadata */
  metadata: SiteMetadata;
  /** Social media configuration */
  social: SocialConfig;
  /** SEO-specific settings */
  seo: SEOConfig;
}

/**
 * Main site configuration object with complete type safety
 *
 * Contains all website metadata, SEO settings, and social media configuration
 * used throughout the Astro application for consistent branding and optimization.
 */
export const siteConfig = {
  metadata: {
    title: 'The Filipino Nurses Association in the Nordic Region (FiNAN)',
    description:
      'The Filipino Nurses Association in the Nordic Region (FiNAN) is a non-profit organization that connects, supports, and advocates for Filipino nurses across the Nordic region, providing trusted guidance on licensing, cultural integration, and professional growth.',
    url: 'https://www.finan.eu.com',
    author: 'The Filipino Nurses Association in the Nordic Region (FiNAN)',
    language: 'en',
  },
  social: {
    facebook: 'https://www.facebook.com/FNANordic/',
    linkedin: 'https://www.linkedin.com/company/fnanordic',
    image: '/ogimg_finan.jpg',
  },
  seo: {
    keywords: [
      'finan',
      'filipino nurses',
      'nordic nursing',
      'nursing association',
      'nurse advocacy',
      'nurse licensing support',
      'healthcare career guidance',
      'nursing community',
      'professional development for nurses',
      'cultural integration support',
      'nordic healthcare jobs',
    ] as const,
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const,
    robots: 'index, follow',
  },
} as const satisfies SiteConfig;

/**
 * Type-safe helper to get site configuration
 */
export const getSiteConfig = (): SiteConfig => siteConfig;

/**
 * Extract just the metadata portion of the configuration
 */
export const getSiteMetadata = (): SiteMetadata => siteConfig.metadata;

/**
 * Extract just the social configuration
 */
export const getSocialConfig = (): SocialConfig => siteConfig.social;

/**
 * Extract just the SEO configuration
 */
export const getSEOConfig = (): SEOConfig => siteConfig.seo;
