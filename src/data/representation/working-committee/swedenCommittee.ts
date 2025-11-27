import type { WorkingCommitteeConfig } from './types';

const swedenCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Linnea Andersson',
      affiliations: '',
      role: 'Representation President',
      bio: 'Leads advocacy efforts with Socialstyrelsen and coordinates national programs that elevate Filipino nurse leadership.',
      imageAlt: 'Portrait of Linnea Andersson',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/linnea-andersson-se',
    },
    {
      name: 'Marco Reyes',
      affiliations: '',
      role: 'Clinical Integration Specialist',
      bio: 'Supports members with supervised practice placements and Swedish-language onboarding resources.',
      imageAlt: 'Portrait of Marco Reyes',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/marco-reyes-se',
    },
    {
      name: 'Emma Sjöberg',
      affiliations: '',
      role: 'Education & Research Lead',
      bio: 'Partners with universities to deliver specialization courses and highlights Filipino contributions to Swedish healthcare research.',
      imageAlt: 'Portrait of Emma Sjöberg',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/emma-sjoberg',
    },
    {
      name: 'Jasper Uy',
      affiliations: '',
      role: 'Member Experience Coordinator',
      bio: 'Ensures every member gains access to mentorship, relocation guidance, and family integration programs across Sweden.',
      imageAlt: 'Portrait of Jasper Uy',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/jasper-uy-se',
    },
  ],
} as const;

export default swedenCommittee;
