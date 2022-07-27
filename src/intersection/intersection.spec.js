import { intersection } from './intersection.js';

describe('intersection: this function return an array that is composed of elements they have in common', () => {
  it('Should return an empty array when empty array provided', () => {
    expect(intersection([], [])).toEqual([]);
  });

  it('Should return a new array when common numbers present in both arrays', () => {
    expect(intersection([1, 2, 4], [1, 2, 3])).toEqual([1, 2]);
  });

  it('Should return [2] on [2, 1], [3, 4, 2] provided', () => {
    expect(intersection([2, 1], [3, 4, 2])).toEqual([2]);
  });
});
