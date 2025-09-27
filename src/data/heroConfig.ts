export interface HeroButton {
  text: string;
  url: string;
}

export interface HeroContact {
  websiteText: string;
  websiteUrl: string;
  websiteLabel: string;
  emailText: string;
  email: string;
}

export interface HeroData {
  title: string;
  description: string;
  contact: HeroContact;
  buttons: {
    primary: HeroButton;
    secondary: HeroButton;
  };
}

export const heroConfig: HeroData = {
  title: "Uniting & Empowering Filipino Nurses in the Nordics",
  description: "FiNAN is a non-profit organization that connects, supports, and advocates for Filipino nurses across the Nordic region, providing trusted guidance on licensing, cultural integration, and professional growth.",
  contact: {
    websiteText: "For more info you can visit our current website",
    websiteUrl: "https://www.filnan.com",
    websiteLabel: "www.filnan.com",
    emailText: "or email us at",
    email: "info@finan.eu.com"
  },
  buttons: {
    primary: {
      text: "Join FiNAN",
      url: "https://filnan.com/membership-form"
    },
    secondary: {
      text: "About FiNAN",
      url: "https://filnan.com/"
    }
  }
};