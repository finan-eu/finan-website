import type { WorkingCommitteeConfig } from './types';

const finlandCommittee: WorkingCommitteeConfig = {
  heading: 'Finland Working Committee',
  description:
    'Leading initiatives that guide Filipino nurses through Finland\'s licensing process, community integration, and continuing education opportunities.',
  members: [
    {
      name: 'Aino Korhonen',
      role: 'Chapter President',
      bio: 'Oversees partnerships with Finnish hospitals and coordinates strategic programs that empower members to thrive in bilingual care settings.',
      imageAlt: 'Portrait of Aino Korhonen, Finland Chapter President',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/aino-korhonen',
    },
    {
      name: 'Miguel Santos',
      role: 'Professional Development Lead',
      bio: 'Designs continuing-education roadmaps that align with Valvira requirements and supports nurses preparing for language proficiency exams.',
      imageAlt: 'Portrait of Miguel Santos, Professional Development Lead',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/miguel-santos-fi',
    },
    {
      name: 'Kristiina Laine',
      role: 'Community Engagement Officer',
      bio: 'Hosts peer mentorship circles across Helsinki, Tampere, and Oulu to ensure every member has social and cultural integration support.',
      imageAlt: 'Portrait of Kristiina Laine, Community Engagement Officer',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/kristiina-laine',
    },
    {
      name: 'Rafael Dela Cruz',
      role: 'Policy & Advocacy Liaison',
      bio: 'Represents the chapter in Nordic labor forums and advocates for streamlined recognition of Filipino nursing credentials across Finland.',
      imageAlt: 'Portrait of Rafael Dela Cruz, Policy and Advocacy Liaison',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/rafael-delacruz-fi',
    },
  ],
} as const;

export default finlandCommittee;
