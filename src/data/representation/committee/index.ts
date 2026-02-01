import faroeIslandsCommittee from './faroeIslandsCommittee';
import finlandCommittee from './finlandCommittee';
import greenlandCommittee from './greenlandCommittee';
import icelandCommittee from './icelandCommittee';
import kingdomDenmarkCommittee from './kingdomDenmarkCommittee';
import norwayCommittee from './norwayCommittee';
import swedenCommittee from './swedenCommittee';
import type { CommitteeConfig } from './types';

export const committeeConfigs = {
  kingdomDenmark: kingdomDenmarkCommittee,
  faroeIslands: faroeIslandsCommittee,
  finland: finlandCommittee,
  greenland: greenlandCommittee,
  iceland: icelandCommittee,
  norway: norwayCommittee,
  sweden: swedenCommittee,
} as const satisfies Record<string, CommitteeConfig>;

export type CommitteeCountry = keyof typeof committeeConfigs;

export {
  faroeIslandsCommittee,
  finlandCommittee,
  greenlandCommittee,
  icelandCommittee,
  kingdomDenmarkCommittee,
  norwayCommittee,
  swedenCommittee,
};

export type { CommitteeConfig, CommitteeMember } from './types';
