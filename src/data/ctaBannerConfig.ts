/**
 * Configuration for the CTA Banner component
 * Contains all text content, links, and data values with full type safety
 */

/**
 * Interface for a Call-to-Action button
 */
export interface CTAButton {
  /** The text displayed on the button */
  text: string;
  /** The URL or anchor link the button navigates to */
  href: string;
}

/**
 * Interface for the CTA Banner content configuration
 */
export interface CTABannerContent {
  /** Main heading text for the CTA section */
  heading: string;
  /** Descriptive text below the heading */
  description: string;
  /** Call-to-action buttons organized by type */
  buttons: {
    /** Secondary button (outline style) */
    secondary: CTAButton;
    /** Primary button (filled style) */
    primary: CTAButton;
  };
}

/**
 * CTA Banner configuration with all content data
 * Used by the CTABanner component to render content
 */
export const ctaBannerConfig: CTABannerContent = {
  heading: 'Join FiNAN and Empower Filipino Nurses in the Nordic Region',
  description:
    'Be part of a non-profit community that supports, guides, and advocates for Filipino nurses across the Nordic region.',
  buttons: {
    primary: {
      text: 'Become a Member',
      href: '#membership',
    },
    secondary: {
      text: 'Donate',
      href: '#donate',
    },
  },
} as const;

export default ctaBannerConfig;
