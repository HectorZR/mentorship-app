import { getStatsFromData } from '.';
import { mockDataInput, mockDataOutput } from './inputOutput';

describe('getStatsFromData', () => {
  test('should get stats', () => {
    const stats = getStatsFromData(mockDataInput);

    expect(stats).toStrictEqual(mockDataOutput);
  });
});
