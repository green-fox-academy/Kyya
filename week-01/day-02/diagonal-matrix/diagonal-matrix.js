'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
const size = 8

const elements = []

for (let i=0; i<size; i++) {
    elements[i] = []
    for (let j=0; j<size; j++)
        elements[i][j] = (j==size-i-1)?1:0
}

console.log(elements)
