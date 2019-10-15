'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
for (let i=1; i<=Math.ceil(lineCount/2); i++) {
    console.log(" ".repeat(lineCount-i) + "*".repeat(2*i-1))
}

for (let i=Math.floor(lineCount/2); i>=1; i--) {
    console.log(" ".repeat(lineCount-i) + "*".repeat(2*i-1))
}
