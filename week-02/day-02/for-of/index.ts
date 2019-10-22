/**
 * Write a function that finds the maximum value in an array.
 */

const data = [5, 1, 2, 9, 7, 3, 8];

// reduce way
function getMaximum(listOfNumbers: number[]): number {
  return listOfNumbers
    .reduce((accumulation, current) => (current > accumulation ? current : accumulation));
}

// for ...of way
function getMaximum2(listOfNumbers: number[]): number {
  let maximum = listOfNumbers[0];
  for (const value of listOfNumbers) {
    if (value > maximum) {
      maximum = value;
    }
  }
  return maximum;
}

console.log(getMaximum(data));
console.log(getMaximum2(data));
