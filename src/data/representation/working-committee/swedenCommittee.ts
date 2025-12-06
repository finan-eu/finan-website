import type { WorkingCommitteeConfig } from './types';
import joyKongWallanderImage from '../../../assets/images/working-committee/sweden/joy-kong-wallander.jpg';
import maryroseVelazcoMartenssonImage from '../../../assets/images/working-committee/sweden/maryrose-velazco-martensson.jpg';
import gemmaLilacEplerImage from '../../../assets/images/working-committee/sweden/gemma-lilac-epler.png';
import cherishMizonaImage from '../../../assets/images/working-committee/sweden/cherish-mizona.jpeg';
import jezylleJoyTiuImage from '../../../assets/images/working-committee/sweden/jezylle-joy-tiu.jpg';
import janiceKarenVelazcoImage from '../../../assets/images/working-committee/sweden/janice-karen-velazco.jpg';

const swedenCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Joy Kong Wallander',
      role: 'President',
      affiliations:
        'Legitimerad Sjuksköterska, Vård och omsorg, Kungsbacka Kommun',
      bio: '',
      imageAlt: 'Portrait of Joy Kong Wallander',
      imageSrc: joyKongWallanderImage,
    },
    {
      name: 'Maryrose Velazco Mårtensson',
      role: 'Vice President',
      affiliations: 'Legitimerad Sjuksköterska, Lotsen Äldreboende, Göteborg',
      bio: '',
      imageAlt: 'Portrait of Maryrose Velazco Mårtensson',
      imageSrc: maryroseVelazcoMartenssonImage,
    },
    {
      name: 'Gemma Lilac Epler',
      role: 'Secretary',
      affiliations:
        'Legitimerad Sjuksköterska, HSL ansvarig, Attendo Äldreboende, Ytterby, Kungälv',
      bio: '',
      imageAlt: 'Portrait of Gemma Lilac Epler',
      imageSrc: gemmaLilacEplerImage,
    },
    {
      name: 'Cherish Mizona',
      role: 'Board Member',
      affiliations:
        'Legitimerad Sjuksköterska, Psykisk omvårdnad, Mölndals Sjukhus / Region Halland',
      bio: '',
      imageAlt: 'Portrait of Cherish Mizona',
      imageSrc: cherishMizonaImage,
    },
    {
      name: 'Jezylle Joy Tiu',
      role: 'Board Member',
      affiliations:
        'Legitimerad Sjuksköterska, Ortopedkliniken, Uddevalla Sjukhus & NÄL Trollhättan',
      bio: '',
      imageAlt: 'Portrait of Jezylle Joy Tiu',
      imageSrc: jezylleJoyTiuImage,
    },
    {
      name: 'Janice Karen Velazco',
      role: 'Board Member',
      affiliations:
        'Legitimerad Sjuksköterska, Lungavdelning / Covidavdelning, Södra Älvsborgs Sjukhus, Borås',
      bio: '',
      imageAlt: 'Portrait of Janice Karen Velazco',
      imageSrc: janiceKarenVelazcoImage,
    },
  ],
} as const;

export default swedenCommittee;
