import type { WorkingCommitteeConfig } from './types';

const norwayCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Ian Faigones',
      affiliations: 'MSN,RN,BSN',
      role: 'Representative',
      bio: 'Nurse Anesthetist',
      imageAlt: 'Portrait of Ian Faigones',
      imageSrc: '/images/image_thumbnail.svg',
      linkedinUrl: '',
    },
  ],
} as const;

export default norwayCommittee;
