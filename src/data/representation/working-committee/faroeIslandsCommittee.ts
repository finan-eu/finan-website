import type { WorkingCommitteeConfig } from './types';

const faroeIslandsCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Elin Johannesen',
      role: 'Representation President',
      affiliations: '',
      bio: 'Oversees island-wide outreach and collaborates with the national hospital to secure fair working conditions for members.',
      imageAlt: 'Portrait of Elin Johannesen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/elin-johannesen',
    },
    {
      name: 'Maribel Flores',
      role: 'Logistics Coordinator',
      affiliations: '',
      bio: 'Arranges travel, housing, and onboarding resources for Filipino nurses assigned to clinics throughout the Faroe Islands.',
      imageAlt: 'Portrait of Maribel Flores',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/maribel-flores-fo',
    },
    {
      name: 'Páll Hentze',
      role: 'Language Mentor',
      affiliations: '',
      bio: 'Facilitates small-group Faroese lessons and creates learning materials that focus on clinical terminology for nurses.',
      imageAlt: 'Portrait of Páll Hentze',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/pall-hentze',
    },
    {
      name: 'Rowena Garcia',
      role: 'Community Events Lead',
      affiliations: '',
      bio: 'Organizes outreach missions and cultural events that bring together Filipino families and local healthcare partners.',
      imageAlt: 'Portrait of Rowena Garcia',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/rowena-garcia-fo',
    },
  ],
} as const;

export default faroeIslandsCommittee;
