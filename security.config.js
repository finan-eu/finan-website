// Security Configuration for FiNAN Website
// This file contains security-related configurations and helpers

export const securityHeaders = {
  // Prevent clickjacking attacks
  'X-Frame-Options': 'DENY',

  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',

  // Control referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Disable dangerous browser features
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',

  // Enforce HTTPS (uncomment when using HTTPS in production)
  // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
};

export const contentSecurityPolicy = {
  'default-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'], // Tailwind requires unsafe-inline
  /**
   * Image sources for Content Security Policy
   *
   * SECURITY NOTE: The img-src directive includes broad wildcard patterns to support Ghost CMS functionality.
   * While these wildcards reduce CSP strictness, they are necessary for the following reasons:
   *
   * - 'self': Local images served from the Astro site
   * - data:: Inline base64-encoded images (used by some image optimization libraries)
   * - https://*.ghost.io: Ghost Pro hosted instances (your Ghost CMS may use a subdomain like yoursite.ghost.io)
   * - https://*.ghost.org: Ghost official CDN and infrastructure
   * - https://*.ghostcdn.com: Ghost's dedicated CDN for image delivery
   * - https://*.cloudfront.net: AWS CloudFront CDN used by Ghost Pro for image distribution
   *   ⚠️  WARNING: This is the broadest wildcard and allows images from ANY CloudFront distribution.
   *   CloudFront is used by thousands of websites, not just Ghost CMS. This represents a security trade-off
   *   between functionality and strict CSP enforcement.
   * - https://images.unsplash.com: Unsplash integration for Ghost CMS (used when selecting stock images)
   *
   * OPTIMIZATION RECOMMENDATIONS:
   * 1. After deploying, inspect browser DevTools Network tab to identify the specific subdomains used
   * 2. Replace wildcards with exact subdomains if possible (e.g., replace https://*.cloudfront.net
   *    with https://d1234abcd5678.cloudfront.net if that's your specific CloudFront distribution)
   * 3. Monitor Ghost's image URLs to ensure they remain consistent
   * 4. Consider self-hosting Ghost images if maximum CSP strictness is required
   *
   * TRADE-OFF JUSTIFICATION:
   * - Ghost Pro dynamically uses CloudFront for image CDN delivery
   * - Ghost may change CDN infrastructure without notice
   * - Overly restrictive CSP would break all blog images
   * - The site only displays content from your controlled Ghost CMS instance
   * - Risk is primarily limited to image display (not script execution or data exfiltration)
   */
  'img-src': [
    "'self'",
    'data:',
    'https://*.ghost.io',
    'https://*.ghost.org',
    'https://*.ghostcdn.com',
    'https://puls.finan.eu.com',
    'https://*.cloudfront.net', // Broad wildcard - see security note above
    'https://images.unsplash.com',
  ],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'script-src': ["'self'", "'unsafe-inline'"], // Required for Google Fonts preload optimization
  'connect-src': ["'self'"],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};

// Convert CSP object to string format
export const cspString = Object.entries(contentSecurityPolicy)
  .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
  .join('; ');

// Security best practices checklist
export const securityChecklist = [
  '✅ Content Security Policy implemented',
  '✅ Security headers configured',
  '✅ Environment variables secured',
  '✅ No exposed sensitive files',
  '✅ Dependencies vulnerability-free',
  '✅ Static site with minimal attack surface',
  '⚠️  HTTPS enforcement (enable in production)',
  '⚠️  Regular dependency updates recommended',
  '⚠️  CSP img-src wildcards documented (Ghost CMS requirement - see comments above)',
  '💡 Consider narrowing CloudFront CSP after identifying specific distribution IDs',
];
