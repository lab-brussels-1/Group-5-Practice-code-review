/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */
//= ============================ Solution ======================================

export const intersection = (arr1, arr2) => {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  const intersectionResult = [];

  for (const i of setB) {
    if (setA.has(i)) {
      intersectionResult.push(i);
    }
  }

  return intersectionResult;
};
