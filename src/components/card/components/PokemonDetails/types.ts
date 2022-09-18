export interface IPokemonDetailsProps {
  pokemonName: string;
  abilities: string[];
  forms: string[];
  stats: { name: string; value: number }[];
  isOpen: boolean;
  onClose: () => void;
}
