/**
 * Ghost CMS API Client
 * Provides type-safe methods to fetch blog posts from Ghost CMS
 */

import { TSGhostContentAPI } from '@ts-ghost/content-api';

// Lazy initialization of Ghost Content API client
let ghostAPI: TSGhostContentAPI | null = null;

function getGhostAPI(): TSGhostContentAPI | null {
  if (ghostAPI) {
    return ghostAPI;
  }

  const ghostUrl = import.meta.env.GHOST_URL;
  const ghostApiKey = import.meta.env.GHOST_CONTENT_API_KEY;

  // Return null if environment variables are not configured
  if (!ghostUrl || !ghostApiKey) {
    console.warn(
      'Ghost CMS environment variables not configured. Blog posts will not be available.'
    );
    return null;
  }

  try {
    ghostAPI = new TSGhostContentAPI(ghostUrl, ghostApiKey, 'v5.0');
    return ghostAPI;
  } catch (error) {
    console.error('Failed to initialize Ghost API client:', error);
    return null;
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
      console.error('Error fetching Ghost posts:', response.errors.join(', '));
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('Failed to fetch blog posts from Ghost:', error);
    return [];
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
      console.error('Error fetching Ghost post:', response.errors.join(', '));
      return null;
    }

    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with slug "${slug}":`, error);
    return null;
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
      console.error('Error fetching post slugs:', response.errors.join(', '));
      return [];
    }

    return response.data.map((post) => post.slug);
  } catch (error) {
    console.error('Failed to fetch post slugs:', error);
    return [];
  }
}

/**
 * Fetch blog posts filtered by tag
 * @param tag - The tag to filter posts by
 * @param limit - Maximum number of posts to fetch (default: 6)
 * @returns Array of blog posts with the specified tag
 */
export async function getBlogPostsByTag(tag: string, limit = 6) {
  const api = getGhostAPI();
  if (!api) {
    return [];
  }

  try {
    // Convert tag name to slug format (lowercase, hyphenated)
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');

    // Use Ghost API filter with proper syntax: tags:slug (note: plural "tags")
    // Reference: https://ghost.org/docs/content-api/#filtering
    const response = await api.posts
      .browse({
        limit,
        order: 'published_at DESC',
        filter: `tags:${tagSlug}`,
      })
      .include({
        authors: true,
        tags: true,
      })
      .fetch();

    if (!response.success) {
      console.error(
        'Error fetching Ghost posts by tag:',
        response.errors.join(', ')
      );
      return [];
    }

    return response.data;
  } catch (error) {
    console.error(`Failed to fetch blog posts with tag "${tag}":`, error);
    return [];
  }
}
