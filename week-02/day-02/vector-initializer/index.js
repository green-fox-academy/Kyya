/* eslint-disable */
const vectors = [
  [1, 2, 3],
  [],
  [2, 3],
  [-1],
  [6, 7, 8, 9],
];

function fillVectors() {
  return vectors
    .map(vector => vector.slice(0, 3))
    .map(vector => {
      if (vector.length == 0) {
        return [ 0, 0, 0];
      } else if (vector.length == 1) {
        return [...vector, 0, 0];
      } else if (vector.length == 2) {
        return [...vector, 0];
      }
      return vector;
    });
}

// expected result:
// [1,2,3]
// [0,0,0]
// [2,3,0]
// [-1,0,0]
// [6,7,8]
fillVectors(vectors).forEach(vector => console.log(vector));


