import fs from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');

const MIN_UNIQUE_WORDS = 250;

const stripTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const uniqueWordCount = (text) => {
  const words = text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2);

  return new Set(words).size;
};

const readHtmlFiles = async (dir) => {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await readHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(fullPath);
    }
  }

  return out;
};

const readAllFiles = async (dir) => {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await readAllFiles(fullPath)));
    } else if (entry.isFile()) {
      out.push(fullPath);
    }
  }

  return out;
};

const toRoute = (filePath) => {
  const rel = path.relative(distDir, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html'))
    return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel.replace(/\.html$/, '/')}`;
};

const extractTagContent = (html, regex) => {
  const match = html.match(regex);
  return match?.[1]?.trim() ?? '';
};

const extractCanonical = (html) => {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  if (!match) return '';

  return extractTagContent(match[0], /href=["']([^"']+)["']/i);
};

const extractLinks = (html) => {
  const links = [...html.matchAll(/<a[^>]+href=["']([^"'#]+)["'][^>]*>/gi)]
    .map((m) => m[1])
    .filter((href) => href.startsWith('/') && !href.startsWith('//'))
    .filter(
      (href) => !href.startsWith('/mailto:') && !href.startsWith('/tel:')
    );

  return new Set(links);
};

const existsRoute = (route, knownRoutes) => {
  if (knownRoutes.has(route)) return true;
  if (!route.endsWith('/') && knownRoutes.has(`${route}/`)) return true;
  if (route.endsWith('/') && knownRoutes.has(route.slice(0, -1))) return true;
  return false;
};

const normalizePath = (href) => href.split('?')[0].split('#')[0];

const main = async () => {
  try {
    await fs.access(distDir);
  } catch {
    console.error(
      'dist/ not found. Run "npm run build" before pSEO quality checks.'
    );
    process.exit(1);
  }

  const files = await readHtmlFiles(distDir);
  const allFiles = await readAllFiles(distDir);
  const staticPaths = new Set(
    allFiles.map(
      (file) => `/${path.relative(distDir, file).replace(/\\/g, '/')}`
    )
  );
  const pages = [];

  for (const file of files) {
    const html = await fs.readFile(file, 'utf8');
    const route = toRoute(file);

    const title = extractTagContent(html, /<title>([\s\S]*?)<\/title>/i);
    const description = extractTagContent(
      html,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i
    );
    const h1Count = [...html.matchAll(/<h1\b[^>]*>/gi)].length;
    const canonical = extractCanonical(html);
    const links = extractLinks(html);

    const text = stripTags(html);
    const uniqueWords = uniqueWordCount(text);

    pages.push({
      route,
      title,
      description,
      h1Count,
      canonical,
      links,
      uniqueWords,
    });
  }

  const knownRoutes = new Set(pages.map((p) => p.route));

  const errors = [];
  const warnings = [];

  const titleMap = new Map();
  const descriptionMap = new Map();

  for (const page of pages) {
    if (!page.title) errors.push(`${page.route}: missing <title>`);
    if (!page.description)
      errors.push(`${page.route}: missing meta description`);
    if (page.h1Count !== 1)
      errors.push(
        `${page.route}: expected exactly one <h1>, found ${page.h1Count}`
      );
    if (!page.canonical) errors.push(`${page.route}: missing canonical URL`);

    if (page.uniqueWords < MIN_UNIQUE_WORDS) {
      warnings.push(
        `${page.route}: low unique-word count (${page.uniqueWords}; threshold ${MIN_UNIQUE_WORDS})`
      );
    }

    if (page.title) {
      const list = titleMap.get(page.title) ?? [];
      list.push(page.route);
      titleMap.set(page.title, list);
    }

    if (page.description) {
      const list = descriptionMap.get(page.description) ?? [];
      list.push(page.route);
      descriptionMap.set(page.description, list);
    }

    for (const link of page.links) {
      const normalized = normalizePath(link);
      const isKnownRoute = existsRoute(normalized, knownRoutes);
      const hasStaticFile = staticPaths.has(normalized.replace(/\/$/, ''));

      if (!isKnownRoute && !hasStaticFile) {
        warnings.push(
          `${page.route}: potential broken internal link -> ${link}`
        );
      }
    }
  }

  for (const [title, routes] of titleMap) {
    if (routes.length > 1) {
      errors.push(
        `duplicate <title> (${routes.length} pages): "${title}" => ${routes.join(', ')}`
      );
    }
  }

  for (const [description, routes] of descriptionMap) {
    if (routes.length > 1) {
      errors.push(
        `duplicate meta description (${routes.length} pages): "${description}" => ${routes.join(', ')}`
      );
    }
  }

  const summary = {
    checkedPages: pages.length,
    errors: errors.length,
    warnings: warnings.length,
  };

  console.log('pSEO Quality Guard Summary');
  console.log(JSON.stringify(summary, null, 2));

  if (errors.length > 0) {
    console.log('\nCritical issues:');
    for (const item of errors) {
      console.log(`- ${item}`);
    }
  }

  if (warnings.length > 0) {
    console.log('\nWarnings:');
    for (const item of warnings) {
      console.log(`- ${item}`);
    }
  }

  if (errors.length > 0) {
    process.exit(1);
  }
};

await main();
