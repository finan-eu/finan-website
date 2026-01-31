import type { CommitteeConfig } from './types';
import cherisaDupitasImage from '../../../assets/images/committee/kingdom-denmark/cherisa-dupitas.jpg';
import girardDupitasImage from '../../../assets/images/committee/kingdom-denmark/girard-dupitas.jpg';
import manilynJacobsenImage from '../../../assets/images/committee/kingdom-denmark/manilyn-jacobsen.jpg';
import jessicaDamImage from '../../../assets/images/committee/kingdom-denmark/jessica-dam.jpg';

const kingdomDenmarkRepresentatives: CommitteeConfig = {
  members: [
    {
      name: 'Cherisa Chy Dupitas',
      affiliations: 'Dronning Ingrids Hospital',
      role: 'Representative',
      bio: 'HeadNurse - Medicinsk Ambulatory Consist of: Adult and Kids Outpatient Unit; Tuberculosis and Infectious Unit; Cancer & Chemotherapy Unit; Palliative Team Unit',
      imageAlt: 'Portrait of Cherisa Dupitas',
      imageSrc: cherisaDupitasImage,
      linkedinUrl: '',
    },
    {
      name: 'Girard Paul Dupitas',
      affiliations: 'Dronning Ingrids Hospital',
      role: 'Representative',
      bio: 'Head Nurse in Patient hotel Dronning Ingrids Hospital. Specialty: Orthopedic nurse; Trauma nurse; Wound nurse specialist; Postgraduate Academic Leadership',
      imageAlt: 'Portrait of Girard Dupitas',
      imageSrc: girardDupitasImage,
      linkedinUrl: '',
    },
    {
      name: 'Manilyn Jacobsen',
      affiliations: 'Ellisheimið',
      role: 'Representative',
      bio: 'Sjúkrarøktarfrøðingur, Ellisheimið',
      imageAlt: 'Portrait of Manilyn Jacobsen',
      imageSrc: manilynJacobsenImage,
      linkedinUrl: '',
    },
    {
      name: 'Jessica Dam',
      affiliations: 'Ellis & Røktarheiminum Mørkin',
      role: 'Representative',
      bio: 'Sjúkrarøktarfrøðingur, Ellis & Røktarheiminum Mørkin',
      imageAlt: 'Portrait of Jessica Dam',
      imageSrc: jessicaDamImage,
      linkedinUrl: '',
    },
  ],
} as const;

export default kingdomDenmarkRepresentatives;
