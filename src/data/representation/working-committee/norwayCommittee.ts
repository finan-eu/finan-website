import type { WorkingCommitteeConfig } from './types';
import ianFaigonesImage from '../../../assets/images/working-committee/norway/ian-faigones.png';

const norwayCommittee: WorkingCommitteeConfig = {
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
