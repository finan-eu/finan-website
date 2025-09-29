import finlandAlandRepresentatives from './finlandAlandRepresentatives';
import swedenRepresentatives from './swedenRepresentatives';
import greenlandFaroeRepresentatives from './greenlandFaroeRepresentatives';
import norwayIcelandRepresentatives from './norwayIcelandRepresentatives';
import type { RegionalRepresentativesConfig } from './types';

export const regionalRepresentativesConfigs = {
  'finland-aland': finlandAlandRepresentatives,
  sweden: swedenRepresentatives,
  'greenland-faroe': greenlandFaroeRepresentatives,
  'norway-iceland': norwayIcelandRepresentatives,
} as const satisfies Record<string, RegionalRepresentativesConfig>;

export type RegionalRepresentativesRegion = keyof typeof regionalRepresentativesConfigs;

export {
  finlandAlandRepresentatives,
  swedenRepresentatives,
  greenlandFaroeRepresentatives,
  norwayIcelandRepresentatives,
};

export type {
  RegionalRepresentativesConfig,
  RegionalRepresentative,
} from './types';