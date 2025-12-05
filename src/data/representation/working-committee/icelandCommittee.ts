import type { WorkingCommitteeConfig } from './types';

const icelandCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Edda Sigurðardóttir',
      role: 'Representation President',
      affiliations: '',
      bio: 'Collaborates with Icelandic nursing councils to champion recognition of Filipino qualifications and secure equitable contracts.',
      imageAlt: 'Portrait of Edda Sigurðardóttir',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/edda-sigurdardottir',
    },
    {
      name: 'Patrick Rivera',
      role: 'Mentorship Program Lead',
      affiliations: '',
      bio: 'Pairs new arrivals with seasoned mentors and develops Iceland-specific onboarding resources for community health roles.',
      imageAlt: 'Portrait of Patrick Rivera',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/patrick-rivera-is',
    },
    {
      name: 'Sara Bjarnadóttir',
      role: 'Education Liaison',
      affiliations: '',
      bio: 'Partners with universities and training centers to offer continuing education credits aligned with Icelandic regulations.',
      imageAlt: 'Portrait of Sara Bjarnadóttir',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/sara-bjarnadottir',
    },
    {
      name: 'Joana Custodio',
      role: 'Events Coordinator',
      affiliations: '',
      bio: 'Leads cultural events and seasonal gatherings that spotlight Filipino heritage within Icelandic communities.',
      imageAlt: 'Portrait of Joana Custodio',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: 'https://www.linkedin.com/in/joana-custodio',
    },
  ],
} as const;

export default icelandCommittee;
