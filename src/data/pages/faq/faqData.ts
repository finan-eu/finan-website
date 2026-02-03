export interface RegistrationInfo {
  organization: string;
  registrationNumber: string;
}

export interface FAQ {
  question: string;
  answer: string;
  followUpLink?: {
    prefix: string;
    text: string;
    href: string;
  };
  registrationDetails?: RegistrationInfo[];
}

export interface FAQCategory {
  categoryName: string;
  categoryDescription?: string;
  faqs: FAQ[];
}

export interface FAQSchemaItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export const faqIntro = `FiNAN is a non-profit organization that empowers Filipino nurses in the Nordic Region. Facing challenges due to the new trend of international recruitment and the lack of national strategic plans for foreign nurse integration, FiNAN actively seeks bilateral labor agreements with stakeholders in both the Philippines and Nordic countries.`;

export const faqCategories: FAQCategory[] = [
  {
    categoryName: 'About FiNAN',
    categoryDescription:
      'Learn more about our organization, mission, and operations',
    faqs: [
      {
        question: 'Is FiNAN a registered NGO?',
        answer:
          'Yes. FiNAN is a registered non-profit organization in Finland, Denmark, and Iceland. We are currently in the process of registering it in Norway and Sweden.',
        registrationDetails: [
          {
            organization: 'Patentti- ja rekisterihallitus',
            registrationNumber: 'Y-tunnus: 3084026-2',
          },
          {
            organization: 'Erhvervsstyrelsen',
            registrationNumber: 'CVR number: 40349367',
          },
          {
            organization: 'Skatteverket',
            registrationNumber: 'Organisation number: 802537-7097',
          },
          {
            organization: 'Ríkisskattstjóri',
            registrationNumber: 'Registration number: 5208190450',
          },
        ],
      },
      {
        question: 'What are the affiliations of FiNAN?',
        answer:
          'We are affiliated with Healthcare Without Harm, United Nations Global Compact, International Associations of Nurses in Palliative Care and with the Don Mariano Marcos Memorial State University.',
      },
      {
        question: 'Do you have any offices that we can visit?',
        answer:
          'FiNAN operates as a virtual non-profit association. The Board primarily holds its meetings remotely.',
      },
    ],
  },
  {
    categoryName: 'Membership',
    categoryDescription:
      'Information about joining FiNAN and membership benefits',
    faqs: [
      {
        question: 'How do I become a member?',
        answer:
          'Membership in the association is open to individuals residing in the Nordic countries who are either licensed nurses or are currently in the process of obtaining their nursing license.',
        followUpLink: {
          prefix: 'Learn more about ',
          text: 'FiNAN Membership',
          href: '/membership',
        },
      },
      {
        question: 'How much is the membership fee?',
        answer:
          "For just 20 euros a year, you're essentially spending the cost of a cup of coffee each month for ten months.",
        followUpLink: {
          prefix: 'Learn more about ',
          text: 'FiNAN Membership',
          href: '/membership',
        },
      },
    ],
  },
  {
    categoryName: 'Recruitment',
    categoryDescription:
      'Questions about recruitment agencies and nursing opportunities',
    faqs: [
      {
        question: 'Are you a recruitment agency?',
        answer:
          'No. The Filipino Nurses Association-Nordic is a non-profit association and not a recruitment agency.',
      },
      {
        question:
          'Can you recommend recruitment agencies in the Philippines that are hiring Filipino Nurses to the Nordic Countries?',
        answer:
          'In the future, we will issue position statements and guidelines, including a list of agencies that adhere to the WHO Global Code of Practice on the International Recruitment of Health Personnel, with a particular focus on nurses.',
      },
    ],
  },
] as const;

// Flatten all FAQs for backward compatibility and schema generation
export const faqs: FAQ[] = faqCategories.flatMap(
  (category) => category.faqs
) as FAQ[];

/**
 * Generate FAQ Page schema markup (JSON-LD) for SEO
 * This helps search engines display rich snippets in search results
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
