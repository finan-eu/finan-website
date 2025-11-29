/**
 * Social Media Configuration
 *
 * Centralized configuration for all social media links used across the site.
 * Update the URLs here to change them throughout the entire website.
 */

export interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
  alt: string;
}

export const socialMediaLinks = [
  {
    name: 'Facebook',
    url: '#',
    icon: '/icons/socmed/facebook.svg',
    alt: 'Facebook',
  },
  {
    name: 'Instagram',
    url: '#',
    icon: '/icons/socmed/instagram.svg',
    alt: 'Instagram',
  },
  {
    name: 'Twitter/X',
    url: '#',
    icon: '/icons/socmed/x-twitter.svg',
    alt: 'Twitter/X',
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: '/icons/socmed/linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    name: 'Youtube',
    url: '#',
    icon: '/icons/socmed/youtube.svg',
    alt: 'Youtube',
  },
] as const satisfies readonly SocialMediaLink[];
