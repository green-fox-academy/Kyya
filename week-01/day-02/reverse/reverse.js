'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`
const aj = [3, 4, 5, 6, 7]

// solution 1
aj.reverse()
console.log(aj)

// solution 2
const aj2 = []
for (let i=aj.length-1; i>=0; i--) {
    aj2.push(aj[i])
}

// reverse twice, so the aj2 would be the original numbers
console.log(aj2)
