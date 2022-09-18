import { GetPokemonDetailsResponse } from '../../../../types';

export const getFormsFromData = (forms: GetPokemonDetailsResponse['forms']) => {
  return forms.map(form => form.name);
};
