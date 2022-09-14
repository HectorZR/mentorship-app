export interface ResponseShape {
  name: string;
  url: string;
}

export interface GetResultsResponse {
  count: number;
  next: number;
  previous: number;
  results: ResponseShape[];
}

export interface GetPokemonDetailsResponse {
  abilities: {ability: {name: string}}[];
  base_experience: number;
  forms: {name: string;url: string}[];
  moves: {move: {name: string}}[];
}