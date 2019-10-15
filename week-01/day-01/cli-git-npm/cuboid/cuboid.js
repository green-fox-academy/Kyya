'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
const width = 20
const length = 10
const height = 10

const surface = width * length * 2 + width * height * 2 + height * length * 2;
const volume = width * length * height;

console.log(`Surface Area: ${surface}`)
console.log(`Volume: ${volume}`)
