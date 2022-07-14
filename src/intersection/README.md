# Intersection

The intersection is a list of distinct numbers/elements which are present in
both the arrays. The numbers/elements in the intersection can be in any order.

---

## Strategy

I chose to using set method to solve this challenge because they're quite easy
to understand.

---

## Implementation

Intersection is performed between `array1` and `array2`.

- The array elements are converted into `Set` elements using the `new Set()`
  constructor.
- The `for...of` loop is used to iterate over the second `Set` elements.
- The `has()` method is used to check if the element is in the first `Set`.
- If the element is present in the first `Set`, that element is added to the
  `intersectionResult` array using the `push()` method.

---

## Use Cases

```js
const intersection = (arr1, arr2) => {
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

intersection([2, 1, 2], [2, 3]);
// intersection result -> [2]
```

---

## Inspiration

- [Techie Delight](https://www.techiedelight.com/find-intersection-arrays-javascript/)
  describing few method on how to find the intersection of two arrays in
  JavaScript.
- [The Coding Odyssey](https://www.youtube.com/watch?v=RvmB_PfhYrA) for some
  visual solution of intersection on youtube.
