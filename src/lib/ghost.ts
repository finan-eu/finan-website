/**
 * Ghost CMS API Client
 * Provides type-safe methods to fetch blog posts from Ghost CMS
 */

import { TSGhostContentAPI } from '@ts-ghost/content-api';

// Lazy initialization of Ghost Content API client
let ghostAPI: TSGhostContentAPI | null = null;

const shouldFailOnGhostError =
  import.meta.env.PROD && process.env.GHOST_STRICT === 'true';

function stringifyGhostDetails(details: unknown): string {
  if (details instanceof Error) {
    return details.message;
  }

  if (typeof details === 'string') {
    return details;
  }

  try {
    return JSON.stringify(details);
  } catch {
    return String(details);
  }
}

function handleGhostFailure<T>(
  message: string,
  fallback: T,
  details?: unknown
): T {
  const suffix = details ? ` ${stringifyGhostDetails(details)}` : '';
  const fullMessage = `[Ghost] ${message}.${suffix}`.trim();

  if (shouldFailOnGhostError) {
    throw new Error(fullMessage);
  }

  console.error(fullMessage);
  return fallback;
}

function getGhostAPI(): TSGhostContentAPI | null {
  if (ghostAPI) {
    return ghostAPI;
  }

  const ghostUrl = import.meta.env.GHOST_URL;
  const ghostApiKey = import.meta.env.GHOST_CONTENT_API_KEY;

  // Return null if environment variables are not configured
  if (!ghostUrl || !ghostApiKey) {
    return handleGhostFailure(
      'Ghost CMS environment variables are not configured. Blog posts will not be available',
      null,
      {
        ghostUrlConfigured: Boolean(ghostUrl),
        ghostApiKeyConfigured: Boolean(ghostApiKey),
      }
    );
  }

  try {
    ghostAPI = new TSGhostContentAPI(ghostUrl, ghostApiKey, 'v5.0');
    return ghostAPI;
  } catch (error) {
    return handleGhostFailure(
      'Failed to initialize Ghost API client',
      null,
      error
    );
  }
}

/**
 * Fetch blog posts from Ghost CMS
 * @param limit - Maximum number of posts to fetch (default: 10)
 * @returns Array of blog posts with selected fields
 */
export async function getBlogPosts(limit = 10) {
  const api = getGhostAPI();
  if (!api) {
    return [];
  }

  try {
    const response = await api.posts
      .browse({
        limit,
        order: 'published_at DESC',
      })
      .include({
        authors: true,
        tags: true,
      })
      .fetch();

    if (!response.success) {
      return handleGhostFailure(
        'Error fetching Ghost posts',
        [],
        response.errors
      );
    }

    return response.data;
  } catch (error) {
    return handleGhostFailure(
      'Failed to fetch blog posts from Ghost',
      [],
      error
    );
  }
}

/**
 * Fetch a single blog post by slug
 * @param slug - The post slug
 * @returns Single blog post or null if not found
 */
export async function getPostBySlug(slug: string) {
  const api = getGhostAPI();
  if (!api) {
    return null;
  }

  try {
    const response = await api.posts
      .read({ slug })
      .include({
        authors: true,
        tags: true,
      })
      .fetch();

    if (!response.success) {
      return handleGhostFailure(
        'Error fetching Ghost post',
        null,
        response.errors
      );
    }

    return response.data;
  } catch (error) {
    return handleGhostFailure(
      `Failed to fetch post with slug "${slug}"`,
      null,
      error
    );
  }
}

/**
 * Get all post slugs for static path generation
 * @returns Array of post slugs
 */
export async function getAllPostSlugs() {
  const api = getGhostAPI();
  if (!api) {
    return [];
  }

  try {
    const response = await api.posts
      .browse({
        limit: 'all',
      })
      .fields({
        slug: true,
      })
      .fetch();

    if (!response.success) {
      return handleGhostFailure(
        'Error fetching post slugs',
        [],
        response.errors
      );
    }

    return response.data.map((post) => post.slug);
  } catch (error) {
    return handleGhostFailure('Failed to fetch post slugs', [], error);
  }
}

/**
 * Fetch blog posts filtered by tag(s)
 * @param tag - The tag or array of tags to filter posts by
 * @param limit - Maximum number of posts to fetch (default: 6)
 * @returns Array of blog posts with the specified tag(s)
 */
export async function getBlogPostsByTag(tag: string | string[], limit = 6) {
  const api = getGhostAPI();
  if (!api) {
    return [];
  }

  try {
    // Convert tag(s) to slug format for matching
    const tagSlugs = Array.isArray(tag)
      ? tag.map((t) => t.toLowerCase().replace(/\s+/g, '-'))
      : [tag.toLowerCase().replace(/\s+/g, '-')];

    // Fetch more posts than needed to account for filtering
    // We'll filter in-memory since ts-ghost library doesn't support tag filters in browse params
    const response = await api.posts
      .browse({
        limit: 'all',
        order: 'published_at DESC',
      })
      .include({
        authors: true,
        tags: true,
      })
      .fetch();

    if (!response.success) {
      return handleGhostFailure(
        `Error fetching Ghost posts by tag "${Array.isArray(tag) ? tag.join(', ') : tag}"`,
        [],
        response.errors
      );
    }

    // Filter posts by matching tag slugs
    const filteredPosts = response.data.filter((post) => {
      if (!post.tags || post.tags.length === 0) {
        return false;
      }
      // Check if any of the post's tags match any of the requested tag slugs
      return post.tags.some((postTag) => tagSlugs.includes(postTag.slug));
    });

    // Return only the requested limit
    return filteredPosts.slice(0, limit);
  } catch (error) {
    return handleGhostFailure(
      `Failed to fetch blog posts with tag "${Array.isArray(tag) ? tag.join(', ') : tag}"`,
      [],
      error
    );
  }
}
