/**
 * The following function takes three numbers
 * and decides whether it could be a triangle or not.
 * The next array contains number arrays with possible triangle sides.
 * Please create a new array that holds boolean values
 * that are created with the isTriangle function and the number arrays.
 */

/* eslint-disable */
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) { return false; }
  if (a + b <= c) { return false; }
  if (a + c <= b) { return false; }
  if (b + c <= a) { return false; }
  return true;
}

var possibleTriangles = [
  [1, 1, 1],
  [3, 4, 5],
  [1, 2, 3],
  [5, 12, 13],
  [-1, -1, -1],
];

console.log(possibleTriangles.map(triangle => isTriangle(...triangle)));
