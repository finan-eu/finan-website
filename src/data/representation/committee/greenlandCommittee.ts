import type { CommitteeConfig } from './types';

const greenlandCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Inuuteq Kristensen',
      affiliations: '',
      role: 'Representation President',
      bio: 'Coordinates with Greenlandic health authorities to streamline credential assessments for Filipino nurses working in Arctic environments.',
      imageAlt: 'Portrait of Inuuteq Kristensen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/inuuteq-kristensen',
    },
    {
      name: 'Lara Mendoza',
      affiliations: '',
      role: 'Remote Practice Advisor',
      bio: 'Provides guidance on telehealth protocols and emergency preparedness for members assigned to outpost clinics.',
      imageAlt: 'Portrait of Lara Mendoza',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/lara-mendoza-gl',
    },
    {
      name: 'Anders Lund',
      affiliations: '',
      role: 'Housing & Transit Coordinator',
      bio: 'Supports relocation logistics, including winter travel planning and temporary housing arrangements for incoming nurses.',
      imageAlt: 'Portrait of Anders Lund',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/anders-lund',
    },
    {
      name: 'Janice Pineda',
      affiliations: '',
      role: 'Wellness Facilitator',
      bio: 'Hosts virtual wellness sessions and resilience workshops tailored for remote practitioners facing long winters.',
      imageAlt: 'Portrait of Janice Pineda',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/janice-pineda',
    },
  ],
} as const;

export default greenlandCommittee;
