'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(...numbers) {
    return numbers.reduce((num, accu) => accu += num)
}

console.log(sum(1,2,3,4))
console.log(sum(1,2,3,4,5,6,7,8,9))
