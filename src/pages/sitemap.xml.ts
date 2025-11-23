// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://finan.eu.com'; // change if needed
const ROOT = process.cwd();

type Entry = {
  loc: string;
  file: string; // absolute or project-relative path to source file
  changefreq: string; // e.g., 'weekly' | 'monthly'
  priority: number; // 0.0 - 1.0
};

const mtimeISO = (file: string) => {
  try {
    const stat = fs.statSync(
      path.isAbsolute(file) ? file : path.join(ROOT, file)
    );
    return stat.mtime.toISOString().split('T')[0]; // YYYY-MM-DD
  } catch {
    return new Date().toISOString().split('T')[0];
  }
};

// ----- Static pages (from your screenshot) -----
const STATIC_PAGES: Entry[] = [
  {
    loc: `${SITE}/`,
    file: 'src/pages/index.astro',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: `${SITE}/about`,
    file: 'src/pages/about.astro',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${SITE}/membership`,
    file: 'src/pages/membership.astro',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${SITE}/guides-resources`,
    file: 'src/pages/guides-resources.astro',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${SITE}/faq`,
    file: 'src/pages/faq.astro',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${SITE}/contact`,
    file: 'src/pages/contact.astro',
    changefreq: 'monthly',
    priority: 0.6,
  },
  // Note: exclude 404.astro from sitemap on purpose.
];

// ----- Representation: auto-discover from folder -----
const REPRESENTATION_DIR = path.join(ROOT, 'src/pages/representation');
const REPRESENTATION_PAGES: Entry[] = (() => {
  let files: string[] = [];
  try {
    files = fs.readdirSync(REPRESENTATION_DIR).filter((f) => f.endsWith('.astro'));
  } catch {
    // folder might not exist in some environments
    return [];
  }

  return files.map((filename) => {
    const slug = filename.replace(/\.astro$/, '');
    return {
      loc: `${SITE}/representation/${slug}`,
      file: path.join(REPRESENTATION_DIR, filename),
      changefreq: 'monthly',
      priority: 0.6,
    } as Entry;
  });
})();

const PAGES: Entry[] = [...STATIC_PAGES, ...REPRESENTATION_PAGES];

export const GET: APIRoute = () => {
  const urls = PAGES.map(({ loc, file, changefreq, priority }) => {
    const lastmod = mtimeISO(file);
    return `
    <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority.toFixed(1)}</priority>
    </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim();

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=UTF-8' },
  });
};
