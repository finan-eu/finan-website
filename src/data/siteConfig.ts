/**
 * SEO Configuration
 *
 * Centralized configuration for all SEO-related settings including
 * meta tags, Open Graph, Twitter Cards, and structured data.
 */

/**
 * Basic website SEO information
 */
export interface BasicSEO {
  /** Default page title */
  title: string;
  /** Title template - use %s as placeholder for page title */
  titleTemplate?: string;
  /** Default title when no page title is provided */
  titleDefault?: string;
  /** Default meta description */
  description: string;
  /** Website base URL (without trailing slash) */
  siteUrl: string;
  /** Website author/organization */
  author: string;
  /** Primary language (ISO 639-1 code) */
  language: string;
  /** Character encoding */
  charset: string;
}

/**
 * Open Graph configuration for social media sharing
 */
export interface OpenGraphConfig {
  /** Default OG type (website, article, etc.) */
  type: 'website' | 'article' | 'blog' | 'profile';
  /** Default OG image (absolute URL or path from public/) */
  image: string;
  /** OG image width in pixels */
  imageWidth?: number;
  /** OG image height in pixels */
  imageHeight?: number;
  /** OG image alt text */
  imageAlt?: string;
  /** Site/organization name */
  siteName: string;
  /** Locale (e.g., en_US, en_GB) */
  locale: string;
  /** Alternative locales */
  alternateLocales?: string[];
}

/**
 * Twitter Card configuration
 */
export interface TwitterConfig {
  /** Twitter card type */
  cardType: 'summary' | 'summary_large_image' | 'app' | 'player';
  /** Twitter handle for the site (without @) */
  site?: string;
  /** Twitter handle for content creator (without @) */
  creator?: string;
  /** Default Twitter image (absolute URL or path from public/) */
  image?: string;
  /** Twitter image alt text */
  imageAlt?: string;
}

/**
 * Default meta tags configuration
 */
export interface MetaConfig {
  /** Default keywords for pages */
  keywords: readonly string[];
  /** Robots meta tag default */
  robots: string;
  /** Theme color for browser UI */
  themeColor?: string;
  /** Mobile web app capable */
  mobileWebAppCapable?: boolean;
  /** Apple mobile web app status bar style */
  appleMobileWebAppStatusBarStyle?: 'default' | 'black' | 'black-translucent';
}

/**
 * Additional SEO settings
 */
export interface AdditionalSEOConfig {
  /** Enable/disable automatic canonical URLs */
  enableCanonical: boolean;
  /** Canonical URL override (if different from siteUrl) */
  canonicalUrlOverride?: string;
  /** Favicon path */
  favicon?: string;
  /** Apple touch icon path */
  appleTouchIcon?: string;
  /** Web manifest path */
  manifest?: string;
}

/**
 * Organization profile for structured data
 */
export interface OrganizationProfile {
  /** Organization display name */
  name: string;
  /** Alternate organization names */
  alternateNames: string[];
}

/**
 * Complete SEO configuration interface
 */
export interface SEOConfig {
  basic: BasicSEO;
  organization: OrganizationProfile;
  openGraph: OpenGraphConfig;
  twitter: TwitterConfig;
  meta: MetaConfig;
  additional: AdditionalSEOConfig;
}

/**
 * Main SEO configuration object
 *
 * This configuration is used as the default for all pages.
 * Individual pages can override these values by passing props to the Layout component.
 */
export const seoConfig = {
  basic: {
    title: 'Filipino Nurses Association Nordic (FiNAN)',
    titleTemplate: '%s | FiNAN',
    titleDefault: 'Filipino Nurses Association Nordic (FiNAN)',
    description:
      'FiNAN supports Filipino nurses across the Nordic region with trusted guidance on licensing, integration, and career growth.',
    siteUrl: 'https://finan.eu.com',
    author: 'Filipino Nurses Association Nordic (FiNAN)',
    language: 'en',
    charset: 'UTF-8',
  },
  organization: {
    name: 'Filipino Nurses Association Nordic',
    alternateNames: ['FiNAN'],
  },
  openGraph: {
    type: 'website',
    image: '/ogimg_finan.jpg',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt:
      'Filipino Nurses Association Nordic (FiNAN) - Connecting and supporting Filipino nurses',
    siteName: 'FiNAN',
    locale: 'en_US',
    alternateLocales: [],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: 'yourhandle',
    creator: 'yourhandle',
    image: '/ogimg_finan.jpg',
    imageAlt:
      'Filipino Nurses Association Nordic (FiNAN) - Connecting and supporting Filipino nurses',
  },
  meta: {
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
    robots: 'index, follow',
    themeColor: '#1e3a8a', // blue-900 from Tailwind
    mobileWebAppCapable: true,
    appleMobileWebAppStatusBarStyle: 'default',
  },
  additional: {
    enableCanonical: true,
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
    manifest: '/site.webmanifest',
  },
} as const satisfies SEOConfig;

/**
 * Type-safe helper to get the complete SEO configuration
 */
export const getSEOConfig = (): SEOConfig => seoConfig;

/**
 * Helper to construct full URL from path
 */
export const getFullUrl = (path: string): string => {
  if (path.startsWith('http')) {
    return path;
  }
  return `${seoConfig.basic.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Helper to get page title with template
 */
export const getPageTitle = (pageTitle?: string): string => {
  if (!pageTitle) {
    return seoConfig.basic.titleDefault;
  }
  if (seoConfig.basic.titleTemplate) {
    return seoConfig.basic.titleTemplate.replace('%s', pageTitle);
  }
  return pageTitle;
};

/**
 * Helper to merge page-specific SEO with defaults
 */
export const mergeSEOConfig = (
  pageConfig: Partial<{
    title: string;
    description: string;
    image: string;
    keywords: string[];
    noindex: boolean;
    nofollow: boolean;
  }>
) => {
  return {
    title: pageConfig.title
      ? getPageTitle(pageConfig.title)
      : seoConfig.basic.title,
    description: pageConfig.description || seoConfig.basic.description,
    image: pageConfig.image
      ? getFullUrl(pageConfig.image)
      : getFullUrl(seoConfig.openGraph.image),
    keywords: pageConfig.keywords || seoConfig.meta.keywords,
    robots:
      pageConfig.noindex || pageConfig.nofollow
        ? `${pageConfig.noindex ? 'noindex' : 'index'}, ${pageConfig.nofollow ? 'nofollow' : 'follow'}`
        : seoConfig.meta.robots,
  };
};
