import type { APIRoute } from 'astro';
import { sitemapConfig } from '../data/sitemap/sitemapConfig';

/**
 * Manual Sitemap Generator
 * Generates XML sitemap with full SEO control
 */

const SITE_URL = 'https://www.finan.eu.com';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const urls = sitemapConfig.urls
    .map((url) => {
      const loc = `${SITE_URL}${url.loc}`;
      const lastmod = url.lastmod
        ? `    <lastmod>${escapeXml(url.lastmod)}</lastmod>\n`
        : '';
      const changefreq = url.changefreq
        ? `    <changefreq>${escapeXml(url.changefreq)}</changefreq>\n`
        : '';
      const priority =
        url.priority !== undefined
          ? `    <priority>${url.priority.toFixed(1)}</priority>\n`
          : '';

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
${lastmod}${changefreq}${priority}  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
