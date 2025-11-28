import type { WorkingCommitteeConfig } from './types';

const swedenCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Joy Kong Wallander',
      affiliations:
        'Legitimerad Sjuksköterska, Vård och omsorg, Kungsbacka Kommun',
      role: 'President',
      bio: '',
      imageAlt: 'Portrait of Joy Kong Wallander',
      imageSrc: '/images/image_thumbnail.svg',
    },
    {
      name: 'Maryrose Velazco Mårtensson',
      affiliations: 'Legitimerad Sjuksköterska, Lotsen Äldreboende, Göteborg',
      role: 'Vice President',
      bio: '',
      imageAlt: 'Portrait of Maryrose Velazco Mårtensson',
      imageSrc: '/images/image_thumbnail.svg',
    },
    {
      name: 'Gemma Lilac Epler',
      affiliations:
        'Legitimerad Sjuksköterska, HSL ansvarig, Attendo Äldreboende, Ytterby, Kungälv',
      role: 'Secretary',
      bio: '',
      imageAlt: 'Portrait of Gemma Lilac Epler',
      imageSrc: '/images/image_thumbnail.svg',
    },
    {
      name: 'Cherish Mizona',
      affiliations:
        'Legitimerad Sjuksköterska, Psykisk omvårdnad, Mölndals Sjukhus / Region Halland',
      role: 'Board Member',
      bio: '',
      imageAlt: 'Portrait of Cherish Mizona',
      imageSrc: '/images/image_thumbnail.svg',
    },
    {
      name: 'Jezylle Joy Tiu',
      affiliations:
        'Legitimerad Sjuksköterska, Ortopedkliniken, Uddevalla Sjukhus & NÄL Trollhättan',
      role: 'Board Member',
      bio: '',
      imageAlt: 'Portrait of Jezylle Joy Tiu',
      imageSrc: '/images/image_thumbnail.svg',
    },
    {
      name: 'Janice Karen Velazco',
      affiliations:
        'Legitimerad Sjuksköterska, Lungavdelning / Covidavdelning, Södra Älvsborgs Sjukhus, Borås',
      role: 'Board Member',
      bio: '',
      imageAlt: 'Portrait of Janice Karen Velazco',
      imageSrc: '/images/image_thumbnail.svg',
    },
  ],
} as const;

export default swedenCommittee;
