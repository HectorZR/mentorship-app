import { ReactNode } from 'react';
import { GetPokemonDetailsResponse } from '../../../../../../types';

export type TAbilitiesInput = GetPokemonDetailsResponse['abilities'];

export type TAbilitiesOutput = string[];
