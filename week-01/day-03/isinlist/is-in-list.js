
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

const listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNumbers(list) {
  return !![4, 8, 12, 16]
    .map((i) => list.includes(i))
    .reduce((accumulation, current) => accumulation & current); // eslint-disable-line
}
console.log(checkNumbers(listOfNumbers));

module.exports = checkNumbers;
