import type { WorkingCommitteeConfig } from './types';

const norwayCommittee: WorkingCommitteeConfig = {
  heading: 'Norway Working Committee',
  description:
    'Delivering nationwide support for authorization, language proficiency, and union engagement for Filipino nurses across Norway.',
  members: [
    {
      name: 'Ingrid Nilsen',
      role: 'Chapter President',
      bio: 'Represents members in national health dialogues and drives strategic collaborations with Norwegian municipalities.',
      imageAlt: 'Portrait of Ingrid Nilsen, Norway Chapter President',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/ingrid-nilsen-no',
    },
    {
      name: 'Christian Del Rosario',
      role: 'Authorization Advisor',
      bio: 'Helps nurses prepare complete Helsedirektoratet applications and navigate specialization pathways.',
      imageAlt: 'Portrait of Christian Del Rosario, Authorization Advisor',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/christian-del-rosario',
    },
    {
      name: 'Solveig Lundberg',
      role: 'Labor Relations Coordinator',
      bio: 'Guides members through union membership benefits, contract reviews, and workplace mediation best practices.',
      imageAlt: 'Portrait of Solveig Lundberg, Labor Relations Coordinator',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/solveig-lundberg',
    },
    {
      name: 'Althea Gonzales',
      role: 'Regional Outreach Lead',
      bio: 'Travels across Oslo, Bergen, and Trondheim delivering workshops on cultural adaptation and professional growth.',
      imageAlt: 'Portrait of Althea Gonzales, Regional Outreach Lead',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/althea-gonzales',
    },
  ],
} as const;

export default norwayCommittee;
