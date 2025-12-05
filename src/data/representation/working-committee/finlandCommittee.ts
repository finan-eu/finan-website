import type { WorkingCommitteeConfig } from './types';
import floroCubeloImage from '../../../assets/images/working-committee/finland/floro-cubelo.jpg';
import ryannDelosoImage from '../../../assets/images/working-committee/finland/ryann-deloso.jpg';
import jeannyMaeBantingTuominenImage from '../../../assets/images/working-committee/finland/jeanny-mae-banting-tuominen.jpg';
import marieLagundiImage from '../../../assets/images/working-committee/finland/marie-lagundi.jpg';

const finlandCommittee: WorkingCommitteeConfig = {
  members: [
    {
      name: 'Floro Cubelo',
      role: 'Puheenjohtaja',
      affiliations: 'TtT, Sh, CGNC, FFNMRCSI, FETNA',
      bio: 'Akuuttihoitotyö, hoitotiede, kansanterveystiede, hoitotyön koulutus, kansainvälisten sairaanhoitajien integroitomis-ja pätevöitymiskoulutus.',
      imageAlt: 'Portrait of Floro Cubelo',
      imageSrc: floroCubeloImage,
      linkedinUrl: '',
    },
    {
      name: 'Ryann Deloso',
      role: 'Edustaja, Uusimaa',
      affiliations: 'SAMK, Sh',
      bio: 'Hoitotyön yrittäjys, akuuttiosasto, hanke osaaja.',
      imageAlt: 'Portrait of Ryann Deloso',
      imageSrc: ryannDelosoImage,
      linkedinUrl: 'https://www.linkedin.com/in/ryann-deloso/',
    },
    {
      name: 'Jeanny Mae Banting Tuominen',
      role: 'Edustaja, Uusimaa',
      affiliations: 'YAMK, Sh',
      bio: 'Dialyysi ja perioperatiivinen hoitotyö.',
      imageAlt: 'Portrait of Jeanny Mae Banting Tuominen',
      imageSrc: jeannyMaeBantingTuominenImage,
      linkedinUrl: '',
    },
    {
      name: 'Marie Lagundi',
      role: 'Edustaja, Pohjois-Suomi',
      affiliations: 'Sh',
      bio: 'Hoitotyön yrittäjys, akuuttiosasto, hanke osaaja.',
      imageAlt: 'Portrait of Marie Lagundi',
      imageSrc: marieLagundiImage,
      linkedinUrl: '',
    },
  ],
} as const;

export default finlandCommittee;
