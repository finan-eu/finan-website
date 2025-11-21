export interface PillarCard {
  title: string;
  description: string;
  icon: string;
}

export interface PillarsData {
  section: {
    subtitle: string;
    title: string;
    description: string;
    buttons: {
      primary: {
        text: string;
        href: string;
      };
      secondary: {
        text: string;
        href: string;
      };
    };
  };
  cards: PillarCard[];
}

export const pillarsConfig: PillarsData = {
  section: {
    subtitle: 'Our Foundation',
    title: 'Four Pillars<br />of Commitment',
    description:
      'FiNAN is built on four core pillars that guide our mission and values. These pillars represent our commitment to humanity, empowerment, research, and professional development.',
    buttons: {
      primary: {
        text: 'Learn More',
        href: '/about',
      },
      secondary: {
        text: 'Join Us',
        href: '/membership',
      },
    },
  },
  cards: [
    {
      title: 'Humanity',
      description:
        'Helping to achieve the Sustainable Development Goals (SDGs).',
      icon: '/icons/pillars/pillars-humanity.svg',
    },
    {
      title: 'Empowerment',
      description:
        'Giving voice to Filipino Nurses living in the Nordic Region as a minority group in the decision-making process.',
      icon: '/icons/pillars/pillars-empowerment.svg',
    },
    {
      title: 'Research',
      description:
        'Evidence-based practice shall be the basis in making decisions and implementing policies.',
      icon: '/icons/pillars/pillars-research.svg',
    },
    {
      title: 'Professional Development',
      description: 'Professional Networking and Continuing Education',
      icon: '/icons/pillars/pillars-professional-development.svg',
    },
  ],
};

