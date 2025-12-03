/**
 * Structured Data Configuration
 *
 * Centralized configuration for Schema.org structured data (JSON-LD)
 * used to help search engines understand the organization and website.
 *
 * This configuration generates Organization and WebSite schemas that
 * help Google properly display "FiNAN" as the site name in search results.
 */

import { seoConfig, getFullUrl } from './seo.config';
import { socialMediaLinks } from './socialMediaConfig';

/**
 * Schema.org Organization structured data
 * @see https://schema.org/Organization
 */
export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  alternateName: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
}

/**
 * Schema.org WebSite structured data
 * @see https://schema.org/WebSite
 */
export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  alternateName: string;
  url: string;
  description: string;
  publisher: {
    '@id': string;
  };
  inLanguage: string;
}

/**
 * Generate Organization schema (JSON-LD)
 *
 * This schema helps search engines identify the organization and
 * display the correct site name ("FiNAN") in search results.
 *
 * @returns Organization schema object
 */
export function generateOrganizationSchema(): OrganizationSchema {
  // Extract organization name from title
  const organizationName = 'FiNAN';
  const fullName = 'Filipino Nurses Association in the Nordic Region';

  // Construct full logo URL
  const logoUrl = getFullUrl('/finan-logo.svg');

  // Extract social media URLs
  const socialUrls = socialMediaLinks.map((social) => social.url);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${seoConfig.basic.siteUrl}/#organization`,
    name: organizationName,
    alternateName: fullName,
    url: seoConfig.basic.siteUrl,
    logo: logoUrl,
    description: seoConfig.basic.description,
    sameAs: socialUrls,
  };
}

/**
 * Generate WebSite schema (JSON-LD)
 *
 * This schema provides additional context about the website
 * and links it to the Organization schema.
 *
 * @returns WebSite schema object
 */
export function generateWebSiteSchema(): WebSiteSchema {
  // Extract organization name from title
  const organizationName = 'FiNAN';
  const fullName = 'Filipino Nurses Association in the Nordic Region';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${seoConfig.basic.siteUrl}/#website`,
    name: organizationName,
    alternateName: fullName,
    url: seoConfig.basic.siteUrl,
    description: seoConfig.basic.description,
    publisher: {
      '@id': `${seoConfig.basic.siteUrl}/#organization`,
    },
    inLanguage: seoConfig.basic.language,
  };
}

/**
 * Type-safe helper to get all structured data schemas
 *
 * @param schemas Array of schema types to generate
 * @returns Array of schema objects
 */
export function generateStructuredData(
  schemas: ('organization' | 'website')[] = ['organization', 'website']
): (OrganizationSchema | WebSiteSchema)[] {
  const result: (OrganizationSchema | WebSiteSchema)[] = [];

  if (schemas.includes('organization')) {
    result.push(generateOrganizationSchema());
  }

  if (schemas.includes('website')) {
    result.push(generateWebSiteSchema());
  }

  return result;
}
