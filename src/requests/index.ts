import Axios from 'axios';
import { GetResultsResponse } from '../types';

export const getResults = async () => {
  return Axios.get<GetResultsResponse>('pokemon', {
    params: {
      limit: 10000,
      offset: 0,
    },
  });
};
