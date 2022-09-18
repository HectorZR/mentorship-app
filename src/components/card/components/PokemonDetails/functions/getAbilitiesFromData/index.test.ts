import { getAbilitiesFromData } from '.';
import { mockDataInput, mockDataOutput } from './inputOutput';

describe('getAbitiliesFromData', () => {
  test('extract all abilities from data', () => {
    const resultInputFalse = getAbilitiesFromData(mockDataInput);
    expect(resultInputFalse).toStrictEqual(mockDataOutput);
  });
});
