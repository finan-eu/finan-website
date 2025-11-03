export interface FAQ {
  question: string;
  answer: string;
}

export const faqIntro = `FiNAN is a non-profit organization that empowers Filipino nurses in the Nordic Region. Facing challenges due to the new trend of international recruitment and the lack of national strategic plans for foreign nurse integration, FiNAN actively seeks bilateral labor agreements with stakeholders in both the Philippines and Nordic countries.`;

export const faqs: FAQ[] = [
  {
    question: 'Are you a recruitment agency?',
    answer:
      'No. The Filipino Nurses Association-Nordic is a non-profit association and not a recruitment agency.',
  },
  {
    question: 'Is FiNAN a registered NGO?',
    answer:
      'Yes. FiNAN is a registered non-profit organization in Finland, Denmark, and Iceland. We are currently in the process of registering it in Norway and Sweden.',
  },
  {
    question:
      'Can you recommend recruitment agencies in the Philippines that are hiring Filipino Nurses to the Nordic Countries?',
    answer:
      'In the future, we will issue position statements and guidelines, including a list of agencies that adhere to the WHO Global Code of Practice on the International Recruitment of Health Personnel, with a particular focus on nurses.',
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
  {
    question: 'How do I become a member?',
    answer:
      'Membership in the association is open to individuals residing in the Nordic countries who are either licensed nurses or are currently in the process of obtaining their nursing license.',
  },
  {
    question: 'How much is the membership fee?',
    answer:
      "For just 20 euros a year, you're essentially spending the cost of a cup of coffee each month for ten months.",
  },
] as const;
