import { deepflat } from './solutions/deep-flat/deep-flat.js.js';

describe('Flatten', () => {
  it('Should return an empty array when empty array provided', () => {
    expect(flatten([])).toEqual([]);
  });

  it('Should return a flat array when a flat array is provided', () => {
    expect(flatten([1, 2])).toEqual([1, 2]);
  });

  it('Should return [1,2,3,4] on [[1,2,[3]],4] provided', () => {
    expect(flatten([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4]);
  });

  it('Should return [1,4,5,6] on [[1,[4],5,6]] provided', () => {
    expect(flatten([[1, [4], 5, 6]])).toEqual([1, 4, 5, 6]);
  });

  it('Should return [1] on [[[1]]] provided', () => {
    expect(flatten([[[1]]])).toEqual([1]);
  });
});
