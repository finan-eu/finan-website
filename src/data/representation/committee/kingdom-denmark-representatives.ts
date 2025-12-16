import type { CommitteeConfig } from './types';
import cherisaDupitasImage from '../../../assets/images/committee/kingdom-denmark/cherisa-dupitas.png';
import girardDupitasImage from '../../../assets/images/committee/kingdom-denmark/girard-dupitas.png';
import manilynJacobsenImage from '../../../assets/images/committee/kingdom-denmark/manilyn-jacobsen.jpg';
import jessicaDamImage from '../../../assets/images/committee/kingdom-denmark/jessica-dam.jpg';

const kingdomDenmarkRepresentatives: CommitteeConfig = {
  members: [
    {
      name: 'Cherisa Dupitas',
      affiliations: 'Dronning Ingrids Hospital',
      role: 'Representative',
      bio: 'Landsdækkende TeleNeurolog Koordinator og Medicinsk Ambulatorium sygeplejerske, Dronning Ingrids Hospital',
      imageAlt: 'Portrait of Cherisa Dupitas',
      imageSrc: cherisaDupitasImage,
      linkedinUrl: '',
    },
    {
      name: 'Girard Dupitas',
      affiliations: 'Dronning Ingrids Hospital',
      role: 'Representative',
      bio: 'Afdelingsygeplejerske, Patient Hotel, Dronning Ingrids Hospital',
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
