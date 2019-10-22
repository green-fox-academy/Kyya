/**
 * Write a function that takes a number array and returns the average of the numbers.
 * In the function store the length of the parameter in a const variable.
 */

function getAverage(listOfNumbers: number[]): number {
  const { length } = listOfNumbers;
  return listOfNumbers
    .reduce((accumulation, current) => accumulation + current) / length;
}

// expect to 5
console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]));
