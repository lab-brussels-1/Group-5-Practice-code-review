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
// =============== solution for this challenge ===============

// const flatten = (arr) => {
//   return arr.flat();
// };

// deep level flatten with reduce and concat

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
