import type { WorkingCommitteeConfig } from './types';

const denmarkCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Sofie Jensen',
      role: 'Representation President',
      affiliations: '',
      bio: 'Coordinates strategic partnerships with Danish healthcare trusts and ensures Filipino nurses are represented in policy discussions.',
      imageAlt: 'Portrait of Sofie Jensen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/sofie-jensen-dk',
    },
    {
      name: 'Jerome Bautista',
      role: 'Licensing Navigator',
      affiliations: '',
      bio: 'Guides nurses through SOR registration, bridging programs, and clinical adaptation pathways within Denmark.',
      imageAlt: 'Portrait of Jerome Bautista',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/jerome-bautista',
    },
    {
      name: 'Camilla Sørensen',
      role: 'Well-being Coordinator',
      affiliations: '',
      bio: "Leads wellness initiatives, including peer counseling and family integration support tailored to Denmark's social systems.",
      imageAlt: 'Portrait of Camilla Sørensen',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/camilla-sorensen',
    },
  ],
} as const;

export default denmarkCommittee;
