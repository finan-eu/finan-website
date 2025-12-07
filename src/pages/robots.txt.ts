/**
 * Dynamic robots.txt endpoint
 *
 * Serves different robots.txt content based on the requesting domain:
 * - pages.dev domains: Disallow all crawlers
 * - Custom domain (finan.eu.com): Allow crawlers with sitemap
 */

import type { APIRoute } from 'astro';

// Configuration
const CUSTOM_DOMAIN = 'www.finan.eu.com';
const PAGES_DEV_PATTERN = /\.pages\.dev$/i;

// Robots.txt for custom domain (allow crawling)
const ROBOTS_ALLOW = `# Allow all crawlers
User-agent: *
Allow: /

# Crawl rate limits to prevent abuse
Crawl-delay: 1

# Sitemap location
Sitemap: https://${CUSTOM_DOMAIN}/sitemap.xml
`;

// Robots.txt for pages.dev domain (disallow crawling)
const ROBOTS_DISALLOW = `# Disallow all crawlers on Cloudflare Pages default domain
# This site is available at https://${CUSTOM_DOMAIN}
User-agent: *
Disallow: /
`;

export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const hostname = url.hostname;

  const isCustomDomain = hostname === CUSTOM_DOMAIN;
  const isPagesDevDomain = PAGES_DEV_PATTERN.test(hostname);

  let content: string;

  if (isCustomDomain) {
    content = ROBOTS_ALLOW;
  } else if (isPagesDevDomain) {
    content = ROBOTS_DISALLOW;
  } else {
    // Unknown domain: default to disallow for safety
    content = ROBOTS_DISALLOW;
  }

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'X-Robots-Tag': isPagesDevDomain ? 'noindex, nofollow' : 'all',
    },
  });
};
