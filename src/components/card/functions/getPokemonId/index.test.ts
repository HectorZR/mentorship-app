import { getPokemonId } from '.';
import { mockDataInput, mockDataOutput } from './inputOutput';

describe('getPokemonId', () => {
  test('extract id from url with slash at the end', () => {
    const result = getPokemonId(mockDataInput + '/');
    expect(result).toBe(mockDataOutput);
  });

  test('extract id from url without slash at the end', () => {
    const result = getPokemonId(mockDataInput);
    expect(result).toBe(mockDataOutput);
  });
});
