/**
 * After that create a function that takes two arrays
 * and returns those numbers which are not present in both arrays.
 */

/* eslint-disable */

// common version
function getNegatedIntersection(list1, list2) {
  return list1
    .filter(i => list2.indexOf(i) === -1)
    .concat(list2.filter(i => list1.indexOf(i) === -1));
}

// ES6 version
function getNegatedIntersectionES6(list1, list2) {
  return [
    ...list1.filter(i=>!list2.includes(i)),
    ...list2.filter(i=>!list1.includes(i)),
  ];
}

// expect to `[1, 3, 4, 5, 6]`
console.log(getNegatedIntersection([1, 2, 3], [4, 5, 6, 2]));
console.log(getNegatedIntersectionES6([1, 2, 3], [4, 5, 6, 2]));
