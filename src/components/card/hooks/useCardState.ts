import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../../../requests';
import { GetPokemonDetailsResponse } from '../../../types';
import { getPokemonId } from '../functions/getPokemonId';

export const useCardState = (url: string) => {
  const [open, setOpen] = useState<boolean>(false);
  const [abilities, setAbilities] = useState<
    GetPokemonDetailsResponse['abilities']
  >([]);
  const [forms, setForms] = useState<GetPokemonDetailsResponse['forms']>([]);
  const [stats, setStats] = useState<GetPokemonDetailsResponse['stats']>([]);

  useEffect(() => {
    if (open) {
      getPokemonDetails(getPokemonId(url)).then(response => {
        setAbilities(response.data.abilities);
        setForms(response.data.forms);
        setStats(response.data.stats);
      });
    }
  }, [open, url]);

  return {
    open,
    setOpen,
    abilities,
    forms,
    stats,
  };
};
