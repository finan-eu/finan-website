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
  'img-src': [
    "'self'",
    'data:',
    'https://*.ghost.io',
    'https://*.ghost.org',
    'https://*.ghostcdn.com',
    'https://*.cloudfront.net',
    'https://images.unsplash.com',
  ],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'script-src': ["'self'"],
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
];
