/**
 * Write a function that takes at least 3 parameters, all of them numbers.
 * The function should return a matrix and the first two parameters should specify it's size.
 * The first parameter is the number of rows, the second is the number of columns.
 * The rest of the numbers is the content of the matrix line-by-line.
 * If the matrix can't be created because of insufficient parameters
 * the function should return null.
 */

type D = null | number[];

function getMatrixES6(rows: number, columns: number, ...rest: number[]): D {
  if (arguments.length < (rows * columns)) {
    return null;
  }
  const elements = [];
  for (let i = 0; i < rows; i++) {
    elements[i] = [];
    for (let j = 0; j < columns; j++) {
      elements[i].push(rest.shift());
    }
  }
  return elements;
}

console.log(getMatrixES6(2, 2, 1, 2, 3, 4));
