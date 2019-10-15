'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
// 1 3 5 7 9
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
for (let i=1; i<=lineCount; i++) 
    console.log(" ".repeat(lineCount-i) + "*".repeat(2*i-1))
