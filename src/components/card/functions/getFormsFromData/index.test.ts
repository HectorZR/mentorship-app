import { getFormsFromData } from '.';
import { mockDataInput, mockDataOutput } from './inputOutput';

describe('getFormsFromData', () => {
  test('should get forms', () => {
    const forms = getFormsFromData(mockDataInput);

    expect(forms).toStrictEqual(mockDataOutput);
  });
});
