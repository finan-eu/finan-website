import type { CommitteeConfig } from './types';
import cristalTolosaWarburgImage from '../../../assets/images/committee/kingdom-denmark/cristal-tolosa-warburg.png';
import katherinePerezLuckmannImage from '../../../assets/images/committee/kingdom-denmark/katherine-perez-luckmann.png';

const denmarkCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Cristal Tolosa Warburg',
      affiliations: 'Herlev Hospital',
      role: 'Chair',
      bio: 'Assisterende Afdelingsygeplejerske, Infektionssygdomme Sengeafsnit, Herlev Hospital',
      imageAlt: 'Portrait of Cristal Tolosa Warburg',
      imageSrc: cristalTolosaWarburgImage,
      linkedinUrl: '',
    },
    {
      name: 'Katherine Perez Luckmann',
      affiliations: 'Herlev Hospital',
      role: 'Co-Chair',
      bio: 'Klinisk Sygeplejevejleder, Infektionssygdomme Sengeafsnit, Herlev Hospital',
      imageAlt: 'Portrait of Katherine Perez Luckmann',
      imageSrc: katherinePerezLuckmannImage,
      linkedinUrl: '',
    },
  ],
} as const;

export default denmarkCommittee;
