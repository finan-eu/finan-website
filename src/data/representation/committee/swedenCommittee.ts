import type { CommitteeConfig } from './types';
import joyKongWallanderImage from '../../../assets/images/committee/sweden/joy-kong-wallander.jpg';
import maryroseVelazcoMartenssonImage from '../../../assets/images/committee/sweden/maryrose-velazco-martensson.jpg';
import gemmaLilacEplerImage from '../../../assets/images/committee/sweden/gemma-lilac-epler.png';
import cherishMizonaImage from '../../../assets/images/committee/sweden/cherish-mizona.jpeg';
import jezylleJoyTiuImage from '../../../assets/images/committee/sweden/jezylle-joy-tiu.jpg';
import janiceKarenVelazcoImage from '../../../assets/images/committee/sweden/janice-karen-velazco.jpg';

const swedenCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Joy Kong Wallander',
      affiliations:
        'Legitimerad Sjuksköterska, Vård och omsorg, Kungsbacka Kommun',
      role: 'President',
      bio: '',
      imageAlt: 'Portrait of Joy Kong Wallander',
      imageSrc: joyKongWallanderImage,
    },
    {
      name: 'Maryrose Velazco Mårtensson',
      affiliations: 'Legitimerad Sjuksköterska, Lotsen Äldreboende, Göteborg',
      role: 'Vice President',
      bio: '',
      imageAlt: 'Portrait of Maryrose Velazco Mårtensson',
      imageSrc: maryroseVelazcoMartenssonImage,
    },
    {
      name: 'Gemma Lilac Epler',
      affiliations:
        'Legitimerad Sjuksköterska, HSL ansvarig, Attendo Äldreboende, Ytterby, Kungälv',
      role: 'Secretary',
      bio: '',
      imageAlt: 'Portrait of Gemma Lilac Epler',
      imageSrc: gemmaLilacEplerImage,
    },
    {
      name: 'Cherish Mizona',
      affiliations:
        'Legitimerad Sjuksköterska, Psykisk omvårdnad, Mölndals Sjukhus / Region Halland',
      role: 'Board Member',
      bio: '',
      imageAlt: 'Portrait of Cherish Mizona',
      imageSrc: cherishMizonaImage,
    },
    {
      name: 'Jezylle Joy Tiu',
      affiliations:
        'Legitimerad Sjuksköterska, Ortopedkliniken, Uddevalla Sjukhus & NÄL Trollhättan',
      role: 'Board Member',
      bio: '',
      imageAlt: 'Portrait of Jezylle Joy Tiu',
      imageSrc: jezylleJoyTiuImage,
    },
    {
      name: 'Janice Karen Velazco',
      affiliations:
        'Legitimerad Sjuksköterska, Lungavdelning / Covidavdelning, Södra Älvsborgs Sjukhus, Borås',
      role: 'Board Member',
      bio: '',
      imageAlt: 'Portrait of Janice Karen Velazco',
      imageSrc: janiceKarenVelazcoImage,
    },
  ],
} as const;

export default swedenCommittee;
