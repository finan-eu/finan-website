import type { ImageMetadata } from 'astro';

export interface WorkingCommitteeMember {
  readonly name: string;
  readonly affiliations?: string;
  readonly role: string;
  readonly bio: string;
  readonly imageAlt: string;
  readonly imageSrc?: string | ImageMetadata;
  readonly linkedinUrl?: string;
}

export interface WorkingCommitteeConfig {
  readonly heading: string;
  readonly description: string;
  readonly members: ReadonlyArray<WorkingCommitteeMember>;
}
