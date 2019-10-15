'use strict';

// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops
const animals = ['dog', 'cat', 'kitten']

const newAnimals = animals.map(animal => `${animal}s`)

console.log(newAnimals)
