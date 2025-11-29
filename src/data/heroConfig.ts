export interface HeroButton {
  text: string;
  url: string;
}

export interface HeroData {
  title: string;
  description: string;
  buttons: {
    primary: HeroButton;
    secondary: HeroButton;
  };
}

export const heroConfig: HeroData = {
  title: 'Uniting & Empowering Filipino Nurses in the Nordics',
  description:
    'FiNAN is a non-profit organization that connects, supports, and advocates for Filipino nurses across the Nordic region, providing trusted guidance on licensing, cultural integration, and professional growth.',
  buttons: {
    primary: {
      text: 'Be a member',
      url: 'https://filnan.com/membership-form',
    },
    secondary: {
      text: 'About FiNAN',
      url: 'https://filnan.com/',
    },
  },
};
