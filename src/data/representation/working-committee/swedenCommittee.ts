import type { WorkingCommitteeConfig } from './types';

const swedenCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Joy Kong Wallander',
      role: 'President',
      affiliations:
        'Legitimerad Sjuksköterska, Vård och omsorg, Kungsbacka Kommun',
      bio: '',
      imageAlt: 'Portrait of Joy Kong Wallander',
      imageSrc:
        '/src/assets/images/working-committee/sweden/joy-kong-wallander.jpg',
    },
    {
      name: 'Maryrose Velazco Mårtensson',
      role: 'Vice President',
      affiliations: 'Legitimerad Sjuksköterska, Lotsen Äldreboende, Göteborg',
      bio: '',
      imageAlt: 'Portrait of Maryrose Velazco Mårtensson',
      imageSrc:
        '/src/assets/images/working-committee/sweden/maryrose-velazco-martensson.jpg',
    },
    {
      name: 'Gemma Lilac Epler',
      role: 'Secretary',
      affiliations:
        'Legitimerad Sjuksköterska, HSL ansvarig, Attendo Äldreboende, Ytterby, Kungälv',
      bio: '',
      imageAlt: 'Portrait of Gemma Lilac Epler',
      imageSrc:
        '/src/assets/images/working-committee/sweden/gemma-lilac-epler.png',
    },
    {
      name: 'Cherish Mizona',
      role: 'Board Member',
      affiliations:
        'Legitimerad Sjuksköterska, Psykisk omvårdnad, Mölndals Sjukhus / Region Halland',
      bio: '',
      imageAlt: 'Portrait of Cherish Mizona',
      imageSrc:
        '/src/assets/images/working-committee/sweden/cherish-mizona.jpeg',
    },
    {
      name: 'Jezylle Joy Tiu',
      role: 'Board Member',
      affiliations:
        'Legitimerad Sjuksköterska, Ortopedkliniken, Uddevalla Sjukhus & NÄL Trollhättan',
      bio: '',
      imageAlt: 'Portrait of Jezylle Joy Tiu',
      imageSrc:
        '/src/assets/images/working-committee/sweden/jezylle-joy-tiu.jpg',
    },
    {
      name: 'Janice Karen Velazco',
      role: 'Board Member',
      affiliations:
        'Legitimerad Sjuksköterska, Lungavdelning / Covidavdelning, Södra Älvsborgs Sjukhus, Borås',
      bio: '',
      imageAlt: 'Portrait of Janice Karen Velazco',
      imageSrc:
        '/src/assets/images/working-committee/sweden/janice-karen-velazco.jpg',
    },
  ],
} as const;

export default swedenCommittee;
