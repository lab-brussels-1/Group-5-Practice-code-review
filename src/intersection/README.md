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

---

## Inspiration
