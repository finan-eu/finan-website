/**
 * Ghost CMS API Client
 * Provides type-safe methods to fetch blog posts from Ghost CMS
 */

import { TSGhostContentAPI } from '@ts-ghost/content-api';

// Initialize Ghost Content API client
export const ghostAPI = new TSGhostContentAPI(
  import.meta.env.GHOST_URL || '',
  import.meta.env.GHOST_CONTENT_API_KEY || '',
  'v5.0'
);

/**
 * Fetch blog posts from Ghost CMS
 * @param limit - Maximum number of posts to fetch (default: 10)
 * @returns Array of blog posts with selected fields
 */
export async function getBlogPosts(limit = 10) {
  try {
    const response = await ghostAPI.posts
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
  try {
    const response = await ghostAPI.posts
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
  try {
    const response = await ghostAPI.posts
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
