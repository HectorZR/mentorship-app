import { GetPokemonDetailsResponse } from '../../../../types';

export const getStatsFromData = (stats: GetPokemonDetailsResponse['stats']) => {
  return stats.map(stat => ({ name: stat.stat.name, value: stat.base_stat }));
};
