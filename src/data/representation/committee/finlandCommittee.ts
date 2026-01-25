import type { CommitteeConfig } from './types';
import floroCubeloImage from '../../../assets/images/committee/finland/floro-cubelo.jpg';
import ryannDelosoImage from '../../../assets/images/committee/finland/ryann-deloso.jpg';
import jeannyMaeBantingTuominenImage from '../../../assets/images/committee/finland/jeanny-mae-banting-tuominen.jpg';
import marieLagundiImage from '../../../assets/images/committee/finland/marie-lagundi.jpg';

const finlandCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Floro Cubelo',
      affiliations: 'TtT, Sh, CGNC, FFNMRCSI, FETNA',
      role: 'Puheenjohtaja',
      bio: 'Akuuttihoitotyö, hoitotiede, kansanterveystiede, hoitotyön koulutus, kansainvälisten sairaanhoitajien integroitomis-ja pätevöitymiskoulutus.',
      imageAlt: 'Portrait of Floro Cubelo',
      imageSrc: floroCubeloImage,
      linkedinUrl: 'https://www.linkedin.com/in/fcjoamk/',
    },
    {
      name: 'Ryann Deloso',
      affiliations: 'YAMK, Sh',
      role: 'Edustaja, Uusimaa',
      bio: 'Hoitotyön yrittäjys, akuuttiosasto, hanke osaaja.',
      imageAlt: 'Portrait of Ryann Deloso',
      imageSrc: ryannDelosoImage,
      linkedinUrl: 'https://www.linkedin.com/in/ryann-deloso/',
    },
    {
      name: 'Jeanny Mae Banting Tuominen',
      affiliations: 'YAMK, Sh',
      role: 'Edustaja, Uusimaa',
      bio: 'Dialyysi ja perioperatiivinen hoitotyö.',
      imageAlt: 'Portrait of Jeanny Mae Banting Tuominen',
      imageSrc: jeannyMaeBantingTuominenImage,
      linkedinUrl: 'https://www.linkedin.com/in/jeanny-mae-tuominen-905a52255/',
    },
    {
      name: 'Marie Lagundi',
      affiliations: 'Sh',
      role: 'Edustaja, Pohjois-Suomi',
      bio: 'Hoitotyön yrittäjys, akuuttiosasto, hanke osaaja.',
      imageAlt: 'Portrait of Marie Lagundi',
      imageSrc: marieLagundiImage,
      linkedinUrl: 'https://www.linkedin.com/in/marie-lagundi-6625051a5',
    },
  ],
} as const;

export default finlandCommittee;
