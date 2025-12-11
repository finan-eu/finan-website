import type { WorkingCommitteeConfig } from './types';
import marviGilImage from '../../../assets/images/working-committee/iceland/marvi-gil.png';

const icelandCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Marvi Gil, RN',
      affiliations:
        'Forensic Psychiatry Department, Landspítali University Hospital',
      role: 'Deputy Manager',
      bio: 'Marvi Gil leads the Iceland Chapter with dedication and passion for advancing nursing practice and supporting Filipino nurses in their professional journey. Her leadership ensures that FiNAN Iceland remains a trusted resource and community for all members.',
      imageAlt: 'Portrait of Marvi Gil',
      imageSrc: marviGilImage,
    },
  ],
} as const;

export default icelandCommittee;
