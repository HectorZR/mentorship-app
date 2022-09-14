import Axios from 'axios';
import { GetPokemonDetailsResponse, GetResultsResponse } from '../types';

export const getResults = async () => {
  return Axios.get<GetResultsResponse>('pokemon', {
    params: {
      limit: 10000,
      offset: 0,
    },
  });
};

export const getPokemonDetails = async (id: number | string) => {
  return Axios.get<GetPokemonDetailsResponse>(`pokemon/${id}`);
};
