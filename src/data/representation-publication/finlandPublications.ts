import type { PublicationData } from './types';

export const finlandPublications: PublicationData = {
  country: 'finland',
  publications: [
    {
      title:
        'Recognition of Nursing Qualification and Credentialing Pathway of Filipino Nurses in Finland: A Qualitative Study',
      journal: 'International Nursing Review',
      doi: '10.1111/inr.12901',
      urn: 'URN:NBN:fi-fe2024082866649',
    },
    {
      title:
        'Impact of Bridging Education Programs on Internationally Educated Nurses Becoming Registered Nurses in High-Income Countries: A Mixed-Methods Systematic Review',
      journal: 'International Nursing Review',
      doi: '10.1111/inr.13038',
      urn: 'URN:NBN:fi-fe2025041729059',
    },
    {
      title:
        'Policy Reform on the Qualification Pathway of Internationally Educated Nurses in Greenland and Its Relationship With the Danish System: A Qualitative Discourse Analysis',
      journal: 'Policy, Politics & Nursing Practice',
      doi: '10.1177/15271544241245975',
    },
    {
      title:
        'Recruit, Integrate, and Retain: Internationally Educated Nurses Mobility to the Nordic Region – A Two-Round Policy Delphi Study',
      journal: 'Nursing Outlook',
      doi: '10.1016/j.outlook.2024.102299',
    },
    {
      title:
        "Internationally Educated Nurses' Role in Climate Change: Sustainability and Mitigation Practices",
      journal: 'Public Health Nursing',
      doi: '10.1111/phn.13012',
    },
    {
      title:
        "Doctoral Dissertation: Building Pathways for Filipino Internationally Educated Nurses' Mobility to the Nordic Region: Recruit, Integrate, Retain and Sustain – A Nurse Labor Migration Model",
      journal:
        'University of Eastern Finland, Dissertations in Health Sciences',
      urn: 'URN:NBN:fi-fe2025051656019',
      isbn: '978-952-61-5601-9 (PDF)',
    },
  ],
} as const satisfies PublicationData;
