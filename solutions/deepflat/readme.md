# Deep Flat: using reduce method

Converts a nested array into a single array with no nesting. It returns a
concatenated new array.

---

## Strategy

I chose to use the reduce() method to solve this challenge because they're fun
to use and nice to read.

---

## Use Case

```js
/**
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example1
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example2
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */

//flatten array use flat() method
// const flatten = (arr) => {
//   return arr.flat();
// };

//deep level flatten with reduce and concat
const flatten = (arr) => {
  flattened = arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc = acc.concat(flatten(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
  return flattened;
};
```

---

## Test Cases

```js
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
```
