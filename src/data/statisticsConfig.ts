export interface StatisticCard {
  value: string;
  title: string;
  description: string;
}

export interface StatisticsData {
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
  cards: StatisticCard[];
}

export const statisticsConfig: StatisticsData = {
  section: {
    subtitle: 'Our Impact in Numbers',
    title: 'Empowering Filipino<br />Nurses Across the Nordics',
    description:
      "From building a strong professional community to guiding nurses through licensing and integration, FiNAN's work is reflected in the numbers. These stats highlight our reach, impact, and dedication to our members.",
    buttons: {
      primary: {
        text: 'Join FiNAN',
        href: 'https://filnan.com/membership-form',
      },
      secondary: {
        text: 'About FiNAN',
        href: 'https://filnan.com/',
      },
    },
  },
  cards: [
    {
      value: '500+',
      title: 'Registered Members',
      description: "Across 5 Nordic countries, united under FiNAN's mission.",
    },
    {
      value: '99%',
      title: 'Licensing Success Rate',
      description:
        "Members who obtained Nordic RN licenses with FiNAN's guidance.",
    },
    {
      value: '€15K',
      title: 'Funds Raised',
      description: 'For humanitarian projects and community support.',
    },
  ],
};
