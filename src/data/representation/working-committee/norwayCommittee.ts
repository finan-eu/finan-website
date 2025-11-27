import type { WorkingCommitteeConfig } from './types';

const norwayCommittee: WorkingCommitteeConfig = {
  heading: 'Working Committee',
  description:
    'Delivering nationwide support for authorization, language proficiency, and union engagement for Filipino nurses across Norway.',
  members: [
    {
      name: 'Ingrid Nilsen',
      affiliations: '',
      role: 'Representation President',
      bio: 'Represents members in national health dialogues and drives strategic collaborations with Norwegian municipalities.',
      imageAlt: 'Portrait of Ingrid Nilsen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/ingrid-nilsen-no',
    },
    {
      name: 'Christian Del Rosario',
      affiliations: '',
      role: 'Authorization Advisor',
      bio: 'Helps nurses prepare complete Helsedirektoratet applications and navigate specialization pathways.',
      imageAlt: 'Portrait of Christian Del Rosario',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/christian-del-rosario',
    },
    {
      name: 'Solveig Lundberg',
      affiliations: '',
      role: 'Labor Relations Coordinator',
      bio: 'Guides members through union membership benefits, contract reviews, and workplace mediation best practices.',
      imageAlt: 'Portrait of Solveig Lundberg',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/solveig-lundberg',
    },
    {
      name: 'Althea Gonzales',
      affiliations: '',
      role: 'Regional Outreach Lead',
      bio: 'Travels across Oslo, Bergen, and Trondheim delivering workshops on cultural adaptation and professional growth.',
      imageAlt: 'Portrait of Althea Gonzales',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/althea-gonzales',
    },
  ],
} as const;

export default norwayCommittee;
