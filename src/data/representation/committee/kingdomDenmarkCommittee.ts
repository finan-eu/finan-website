import type { CommitteeConfig } from './types';
import cristalTolosaWarburgImage from '../../../assets/images/committee/kingdom-denmark/cristal-tolosa-warburg.png';
import katherinePerezLuckmannImage from '../../../assets/images/committee/kingdom-denmark/katherine-perez-luckmann.png';
import cherisaDupitasImage from '../../../assets/images/committee/kingdom-denmark/cherisa-dupitas.jpg';
import girardDupitasImage from '../../../assets/images/committee/kingdom-denmark/girard-dupitas.jpg';
import manilynJacobsenImage from '../../../assets/images/committee/kingdom-denmark/manilyn-jacobsen.jpg';
import jessicaDamImage from '../../../assets/images/committee/kingdom-denmark/jessica-dam.jpg';

const kingdomDenmarkCommittee: CommitteeConfig = {
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

export default kingdomDenmarkCommittee;
