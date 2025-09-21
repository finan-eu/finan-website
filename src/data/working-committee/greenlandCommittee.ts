import type { WorkingCommitteeConfig } from './types';

const greenlandCommittee: WorkingCommitteeConfig = {
  heading: 'Greenland Working Committee',
  description:
    'Ensuring nurses stationed in Nuuk, Ilulissat, and remote clinics receive consistent professional support, cultural orientation, and advocacy.',
  members: [
    {
      name: 'Inuuteq Kristensen',
      role: 'Chapter President',
      bio: 'Coordinates with Greenlandic health authorities to streamline credential assessments for Filipino nurses working in Arctic environments.',
      imageAlt: 'Portrait of Inuuteq Kristensen, Greenland Chapter President',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/inuuteq-kristensen',
    },
    {
      name: 'Lara Mendoza',
      role: 'Remote Practice Advisor',
      bio: 'Provides guidance on telehealth protocols and emergency preparedness for members assigned to outpost clinics.',
      imageAlt: 'Portrait of Lara Mendoza, Remote Practice Advisor',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/lara-mendoza-gl',
    },
    {
      name: 'Anders Lund',
      role: 'Housing & Transit Coordinator',
      bio: 'Supports relocation logistics, including winter travel planning and temporary housing arrangements for incoming nurses.',
      imageAlt: 'Portrait of Anders Lund, Housing and Transit Coordinator',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/anders-lund',
    },
    {
      name: 'Janice Pineda',
      role: 'Wellness Facilitator',
      bio: 'Hosts virtual wellness sessions and resilience workshops tailored for remote practitioners facing long winters.',
      imageAlt: 'Portrait of Janice Pineda, Wellness Facilitator',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/janice-pineda',
    },
  ],
} as const;

export default greenlandCommittee;
