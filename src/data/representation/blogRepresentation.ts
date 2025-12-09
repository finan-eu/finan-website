/**
 * Blog Representation Configuration
 * Defines headings and descriptions for blog sections on each representation page
 */

export interface BlogRepresentationConfig {
  heading: string;
  description: string;
  tag: string | string[];
}

export const blogRepresentationConfig = {
  finland: {
    heading: 'Latest from Finland',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Finland. Explore our recent activities, policy updates, and community highlights.',
    tag: 'Finland',
  },
  sweden: {
    heading: 'Latest from Sweden',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Sweden. Explore our recent activities, policy updates, and community highlights.',
    tag: 'Sweden',
  },
  norway: {
    heading: 'Latest from Norway',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Norway. Explore our recent activities, policy updates, and community highlights.',
    tag: 'Norway',
  },
  denmark: {
    heading: 'Latest from Denmark',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Denmark. Explore our recent activities, policy updates, and community highlights.',
    tag: 'Denmark',
  },
  iceland: {
    heading: 'Latest from Iceland',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Iceland. Explore our recent activities, policy updates, and community highlights.',
    tag: 'Iceland',
  },
  'faroe-islands': {
    heading: 'Latest from Faroe Islands',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Faroe Islands. Explore our recent activities, policy updates, and community highlights.',
    tag: 'Faroe Islands',
  },
  greenland: {
    heading: 'Latest from Greenland',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Greenland. Explore our recent activities, policy updates, and community highlights.',
    tag: 'Greenland',
  },
  'kingdom-denmark': {
    heading: 'Latest from Kingdom of Denmark',
    description:
      'Stay updated with the latest news, events, and insights from FiNAN Kingdom of Denmark. Explore our recent activities, policy updates, and community highlights.',
    tag: ['Kingdom of Denmark', 'Denmark', 'Faroe Islands', 'Greenland'],
  },
} as const satisfies Record<string, BlogRepresentationConfig>;

export type RepresentationCountry = keyof typeof blogRepresentationConfig;
