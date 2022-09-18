import { GetPokemonDetailsResponse } from '../../../../types';

export const mockDataInput: GetPokemonDetailsResponse['stats'] = [
  {
    base_stat: 45,
    effort: 0,
    stat: {
      name: 'hp',
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: 'attack',
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: 'defense',
    },
  },
];

export const mockDataOutput = [
  {
    name: 'hp',
    value: 45,
  },
  {
    name: 'attack',
    value: 49,
  },
  {
    name: 'defense',
    value: 49,
  },
];
