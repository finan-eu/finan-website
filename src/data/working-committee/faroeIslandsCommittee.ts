import type { WorkingCommitteeConfig } from './types';

const faroeIslandsCommittee: WorkingCommitteeConfig = {
  heading: 'Working Committee',
  description:
    'Connecting Filipino nurses across the archipelago with tailored support for remote placements, cultural acclimation, and Faroese language basics.',
  members: [
    {
      name: 'Elin Johannesen',
      role: 'Representation President',
      bio: 'Oversees island-wide outreach and collaborates with the national hospital to secure fair working conditions for members.',
      imageAlt: 'Portrait of Elin Johannesen, Faroe Islands Representation President',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/elin-johannesen',
    },
    {
      name: 'Maribel Flores',
      role: 'Logistics Coordinator',
      bio: 'Arranges travel, housing, and onboarding resources for Filipino nurses assigned to clinics throughout the Faroe Islands.',
      imageAlt: 'Portrait of Maribel Flores, Logistics Coordinator',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/maribel-flores-fo',
    },
    {
      name: 'Páll Hentze',
      role: 'Language Mentor',
      bio: 'Facilitates small-group Faroese lessons and creates learning materials that focus on clinical terminology for nurses.',
      imageAlt: 'Portrait of Páll Hentze, Language Mentor',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/pall-hentze',
    },
    {
      name: 'Rowena Garcia',
      role: 'Community Events Lead',
      bio: 'Organizes outreach missions and cultural events that bring together Filipino families and local healthcare partners.',
      imageAlt: 'Portrait of Rowena Garcia, Community Events Lead',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/rowena-garcia-fo',
    },
  ],
} as const;

export default faroeIslandsCommittee;
