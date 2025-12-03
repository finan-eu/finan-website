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
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/fnanordic',
    icon: '/icons/socmed/linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/FNANordic/',
    icon: '/icons/socmed/facebook.svg',
    alt: 'Facebook',
  },
  // Uncomment when links are available
  // {
  //   name: 'Instagram',
  //   url: '#',
  //   icon: '/icons/socmed/instagram.svg',
  //   alt: 'Instagram',
  // },
  // {
  //   name: 'X/Twitter',
  //   url: '#',
  //   icon: '/icons/socmed/x-twitter.svg',
  //   alt: 'Twitter/X',
  // },
  // {
  //   name: 'Youtube',
  //   url: '#',
  //   icon: '/icons/socmed/youtube.svg',
  //   alt: 'Youtube',
  // },
] as const satisfies readonly SocialMediaLink[];
