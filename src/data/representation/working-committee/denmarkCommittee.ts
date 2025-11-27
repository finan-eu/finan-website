import type { WorkingCommitteeConfig } from './types';

const denmarkCommittee: WorkingCommitteeConfig = {
  heading: 'Working Committee',
  description:
    'Supporting members across Copenhagen, Aarhus, and Odense with credential validation, community outreach, and Danish language immersion.',
  members: [
    {
      name: 'Sofie Jensen',
      affiliations: '',
      role: 'Representation President',
      bio: 'Coordinates strategic partnerships with Danish healthcare trusts and ensures Filipino nurses are represented in policy discussions.',
      imageAlt: 'Portrait of Sofie Jensen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/sofie-jensen-dk',
    },
    {
      name: 'Jerome Bautista',
      affiliations: '',
      role: 'Licensing Navigator',
      bio: 'Guides nurses through SOR registration, bridging programs, and clinical adaptation pathways within Denmark.',
      imageAlt: 'Portrait of Jerome Bautista',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/jerome-bautista',
    },
    {
      name: 'Camilla Sørensen',
      affiliations: '',
      role: 'Well-being Coordinator',
      bio: "Leads wellness initiatives, including peer counseling and family integration support tailored to Denmark's social systems.",
      imageAlt: 'Portrait of Camilla Sørensen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/camilla-sorensen',
    },
  ],
} as const;

export default denmarkCommittee;
