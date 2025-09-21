import denmarkCommittee from './denmarkCommittee';
import faroeIslandsCommittee from './faroeIslandsCommittee';
import finlandCommittee from './finlandCommittee';
import greenlandCommittee from './greenlandCommittee';
import icelandCommittee from './icelandCommittee';
import norwayCommittee from './norwayCommittee';
import swedenCommittee from './swedenCommittee';
import type { WorkingCommitteeConfig } from './types';

export const workingCommitteeConfigs = {
  denmark: denmarkCommittee,
  'faroe-islands': faroeIslandsCommittee,
  finland: finlandCommittee,
  greenland: greenlandCommittee,
  iceland: icelandCommittee,
  norway: norwayCommittee,
  sweden: swedenCommittee,
} as const satisfies Record<string, WorkingCommitteeConfig>;

export type WorkingCommitteeCountry = keyof typeof workingCommitteeConfigs;

export {
  denmarkCommittee,
  faroeIslandsCommittee,
  finlandCommittee,
  greenlandCommittee,
  icelandCommittee,
  norwayCommittee,
  swedenCommittee,
};

export type {
  WorkingCommitteeConfig,
  WorkingCommitteeMember,
} from './types';
