import type { WorkingCommitteeConfig } from './types';

const swedenCommittee: WorkingCommitteeConfig = {
  heading: 'Working Committee',
  description:
    'Championing pathways for Filipino nurses to obtain Swedish licensure, pursue specialization, and build vibrant local communities.',
  members: [
    {
      name: 'Linnea Andersson',
      role: 'Chapter President',
      bio: 'Leads advocacy efforts with Socialstyrelsen and coordinates national programs that elevate Filipino nurse leadership.',
      imageAlt: 'Portrait of Linnea Andersson, Sweden Chapter President',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/linnea-andersson-se',
    },
    {
      name: 'Marco Reyes',
      role: 'Clinical Integration Specialist',
      bio: 'Supports members with supervised practice placements and Swedish-language onboarding resources.',
      imageAlt: 'Portrait of Marco Reyes, Clinical Integration Specialist',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/marco-reyes-se',
    },
    {
      name: 'Emma Sjöberg',
      role: 'Education & Research Lead',
      bio: 'Partners with universities to deliver specialization courses and highlights Filipino contributions to Swedish healthcare research.',
      imageAlt: 'Portrait of Emma Sjöberg, Education and Research Lead',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/emma-sjoberg',
    },
    {
      name: 'Jasper Uy',
      role: 'Member Experience Coordinator',
      bio: 'Ensures every member gains access to mentorship, relocation guidance, and family integration programs across Sweden.',
      imageAlt: 'Portrait of Jasper Uy, Member Experience Coordinator',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/jasper-uy-se',
    },
  ],
} as const;

export default swedenCommittee;
