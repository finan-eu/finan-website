import denmarkCommittee from './denmarkCommittee';
import faroeIslandsCommittee from './faroeIslandsCommittee';
import finlandCommittee from './finlandCommittee';
import greenlandCommittee from './greenlandCommittee';
import icelandCommittee from './icelandCommittee';
import norwayCommittee from './norwayCommittee';
import swedenCommittee from './swedenCommittee';
import type { CommitteeConfig } from './types';

export const committeeConfigs = {
  denmark: denmarkCommittee,
  'faroe-islands': faroeIslandsCommittee,
  finland: finlandCommittee,
  greenland: greenlandCommittee,
  iceland: icelandCommittee,
  norway: norwayCommittee,
  sweden: swedenCommittee,
} as const satisfies Record<string, CommitteeConfig>;

export type CommitteeCountry = keyof typeof committeeConfigs;

export {
  denmarkCommittee,
  faroeIslandsCommittee,
  finlandCommittee,
  greenlandCommittee,
  icelandCommittee,
  norwayCommittee,
  swedenCommittee,
};

export type { CommitteeConfig, CommitteeMember } from './types';
