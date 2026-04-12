/**
 * Structured Data Configuration
 *
 * Centralized configuration for Schema.org structured data (JSON-LD)
 * used to help search engines understand the organization and website.
 *
 * This configuration generates Organization and WebSite schemas that
 * help Google properly display "FiNAN" as the site name in search results.
 */

import { seoConfig, getFullUrl } from './siteConfig';
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
  alternateName: string[];
  url: string;
  logo: {
    '@type': string;
    url: string;
  };
  description: string;
  sameAs: string[];
  contactPoint?: {
    '@type': string;
    contactType: string;
    email: string;
    availableLanguage: string[];
  };
  address?: {
    '@type': string;
    addressCountry: string;
    addressRegion?: string;
  };
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
  alternateName: string[];
  url: string;
  description: string;
  publisher: {
    '@id': string;
  };
  inLanguage: string;
}

/**
 * Schema.org Event structured data
 * @see https://schema.org/Event
 */
export interface EventSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  eventStatus: string;
  eventAttendanceMode: string;
  location: {
    '@type': string;
    name: string;
    address: {
      '@type': string;
      addressLocality: string;
      addressCountry: string;
    };
  };
  image: string[];
  organizer: {
    '@id': string;
  };
  performer?: {
    '@type': string;
    '@id'?: string;
    name: string;
  };
  offers?: {
    '@type': string;
    url: string;
    price: string;
    priceCurrency: string;
    availability: string;
    validFrom: string;
  };
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
  // Follow Google's example: full name as primary, acronym as alternate
  const organizationName = seoConfig.organization.name;
  const alternateNames = seoConfig.organization.alternateNames;

  // Construct full logo URL (structured format for better Google understanding)
  const logoUrl = getFullUrl('/finan-logo.svg');

  // Extract social media URLs
  const socialUrls = socialMediaLinks.map((social) => social.url);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${seoConfig.basic.siteUrl}/#organization`,
    name: organizationName,
    alternateName: alternateNames,
    url: seoConfig.basic.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    description: seoConfig.basic.description,
    sameAs: socialUrls,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'info@finan.eu.com',
      availableLanguage: ['en', 'tl'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FI',
      addressRegion: 'Nordic Region',
    },
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
  // Prioritize "FiNAN" for Google Search "Site Name"
  const websiteName = seoConfig.openGraph.siteName;
  const alternateNames = [seoConfig.organization.name];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${seoConfig.basic.siteUrl}/#website`,
    name: websiteName,
    alternateName: alternateNames,
    url: seoConfig.basic.siteUrl,
    description: seoConfig.basic.description,
    publisher: {
      '@id': `${seoConfig.basic.siteUrl}/#organization`,
    },
    inLanguage: seoConfig.basic.language,
  };
}

/**
 * Generate Event schema for Triennial Gathering 2026
 *
 * NOTE: This event page is currently unpublished (template preserved in src/templates/).
 * When republishing, uncomment the schema generation in generateStructuredData() below.
 *
 * This schema helps Google display the event in search results
 * with rich snippets including date, location, and registration info.
 *
 * @returns Event schema object
 */
/*
export function generateTriennialGathering2026EventSchema(): EventSchema {
  const eventUrl = `${seoConfig.basic.siteUrl}/triennial-gathering-2026`;
  const eventImageUrl = getFullUrl('/ogimg_finan.jpg');

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${eventUrl}#event`,
    name: 'FiNAN Triennial Gathering 2026',
    description:
      'Join us for the FiNAN Triennial Gathering 2026 in Reykjavik, Iceland on March 29 to 30, 2026. Amplifying Voices: Navigating Equity, Leadership, and Global Migration. A platform for Filipino Internationally Educated Nurses, healthcare leaders, policy-makers, and recruiters to explore workforce mobility, ethical recruitment, integration, and the future of nursing.',
    startDate: '2026-03-29T11:00:00+00:00',
    endDate: '2026-03-30T23:59:59+00:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Reykjavik, Iceland',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Reykjavik',
        addressCountry: 'IS',
      },
    },
    image: [eventImageUrl],
    organizer: {
      '@id': `${seoConfig.basic.siteUrl}/#organization`,
    },
    performer: {
      '@type': 'Organization',
      '@id': `${seoConfig.basic.siteUrl}/#organization`,
      name: 'Filipino Nurses Association-Nordic (FiNAN)',
    },
    offers: {
      '@type': 'Offer',
      url: eventUrl,
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01T00:00:00+00:00',
    },
  };
}
*/

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
