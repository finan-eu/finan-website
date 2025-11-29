import type { ImageMetadata } from 'astro';

export interface Partner {
  logo: ImageMetadata;
  alt: string;
  content: string[];
}
