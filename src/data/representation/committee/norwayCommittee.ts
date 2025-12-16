import type { CommitteeConfig } from './types';
import ianFaigonesImage from '../../../assets/images/committee/norway/ian-faigones.png';

const norwayCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Ian Faigones',
      affiliations: 'MSN,RN,BSN',
      role: 'Representative',
      bio: 'Nurse Anesthetist',
      imageAlt: 'Portrait of Ian Faigones',
      imageSrc: ianFaigonesImage,
      linkedinUrl: '',
    },
  ],
} as const;

export default norwayCommittee;
