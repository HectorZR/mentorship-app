import { TAbilitiesInput, TAbilitiesOutput } from './interfaces';

export function getAbilitiesFromData(data: TAbilitiesInput): TAbilitiesOutput {
  return data.map(ability => ability.ability.name);
}
