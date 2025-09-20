import type { ImageMetadata } from 'astro';
import finlandPrhImg from '../assets/images/registrations/finland-prh.png';
import denmarkErhvervsstyrelsenImg from '../assets/images/registrations/denmark-erhvervsstyrelsen.png';
import swedenSkatteverketImg from '../assets/images/registrations/sweden-skatteverket.png';
import icelandRikisskattstjoriImg from '../assets/images/registrations/iceland-rikisskattstjori.jpg';

export interface RegistrationEntity {
  id: string;
  country: string;
  organizationName: string;
  organizationNameLocal: string;
  registrationNumber: string;
  registrationLabel: string;
  image: {
    src: ImageMetadata;
    alt: string;
    width: number;
    loading: 'lazy' | 'eager';
    format: 'webp' | 'png' | 'jpg' | 'jpeg';
  };
}

export interface RegistrationSectionContent {
  title: {
    highlight: string;
    normal: string;
  };
  description: string;
  entities: RegistrationEntity[];
}

export const registrationSectionConfig: RegistrationSectionContent = {
  title: {
    highlight: "The Filipino Nurses Association in the Nordic Region",
    normal: "is a registered non-profit organization in the Nordic Region."
  },
  description: "The Filipino Nurses Association in the Nordic Region is a registered non-profit organization in the Nordic Region.",
  entities: [
    {
      id: "finland-prh",
      country: "Finland",
      organizationName: "Finnish Patent and Registration Office",
      organizationNameLocal: "Patentti- ja rekisterihallitus",
      registrationNumber: "3084026-2",
      registrationLabel: "Y-tunnus",
      image: {
        src: finlandPrhImg,
        alt: "Finnish Patent and Registration Office (PRH)",
        width: 360,
        loading: "lazy",
        format: "webp"
      }
    },
    {
      id: "denmark-erhvervsstyrelsen",
      country: "Denmark",
      organizationName: "Danish Business Authority",
      organizationNameLocal: "Erhvervsstyrelsen",
      registrationNumber: "40349367",
      registrationLabel: "CVR number",
      image: {
        src: denmarkErhvervsstyrelsenImg,
        alt: "Danish Business Authority (Erhvervsstyrelsen)",
        width: 360,
        loading: "lazy",
        format: "webp"
      }
    },
    {
      id: "sweden-skatteverket",
      country: "Sweden",
      organizationName: "Swedish Tax Agency",
      organizationNameLocal: "Skatteverket",
      registrationNumber: "802537-7097",
      registrationLabel: "Organisation number",
      image: {
        src: swedenSkatteverketImg,
        alt: "Swedish Tax Agency (Skatteverket)",
        width: 360,
        loading: "lazy",
        format: "webp"
      }
    },
    {
      id: "iceland-rikisskattstjori",
      country: "Iceland",
      organizationName: "Directorate of Internal Revenue",
      organizationNameLocal: "Ríkisskattstjóri",
      registrationNumber: "5208190450",
      registrationLabel: "Registration number",
      image: {
        src: icelandRikisskattstjoriImg,
        alt: "Directorate of Internal Revenue (Ríkisskattstjóri)",
        width: 360,
        loading: "lazy",
        format: "webp"
      }
    }
  ]
};

export type { ImageMetadata };