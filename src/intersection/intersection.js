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
