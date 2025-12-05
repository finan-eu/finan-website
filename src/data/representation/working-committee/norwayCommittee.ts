import type { WorkingCommitteeConfig } from './types';

const norwayCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Ingrid Nilsen',
      role: 'Representation President',
      affiliations: '',
      bio: 'Represents members in national health dialogues and drives strategic collaborations with Norwegian municipalities.',
      imageAlt: 'Portrait of Ingrid Nilsen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/ingrid-nilsen-no',
    },
    {
      name: 'Christian Del Rosario',
      role: 'Authorization Advisor',
      affiliations: '',
      bio: 'Helps nurses prepare complete Helsedirektoratet applications and navigate specialization pathways.',
      imageAlt: 'Portrait of Christian Del Rosario',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/christian-del-rosario',
    },
    {
      name: 'Solveig Lundberg',
      role: 'Labor Relations Coordinator',
      affiliations: '',
      bio: 'Guides members through union membership benefits, contract reviews, and workplace mediation best practices.',
      imageAlt: 'Portrait of Solveig Lundberg',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/solveig-lundberg',
    },
    {
      name: 'Althea Gonzales',
      role: 'Regional Outreach Lead',
      affiliations: '',
      bio: 'Travels across Oslo, Bergen, and Trondheim delivering workshops on cultural adaptation and professional growth.',
      imageAlt: 'Portrait of Althea Gonzales',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/althea-gonzales',
    },
  ],
} as const;

export default norwayCommittee;
