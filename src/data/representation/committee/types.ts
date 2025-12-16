import type { ImageMetadata } from 'astro';

export interface CommitteeMember {
  readonly name: string;
  readonly affiliations?: string;
  readonly role: string;
  readonly bio: string;
  readonly imageAlt: string;
  readonly imageSrc?: string | ImageMetadata;
  readonly linkedinUrl?: string;
}

export interface CommitteeConfig {
  readonly members: ReadonlyArray<CommitteeMember>;
}
