
const test = require('tape');
const appendA = require('../append-letter.js');

test('test appendA() with a list of animals', (t) => {
  const animalsWithoutA = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
  const expectedAnimals = ['boa', 'anaconda', 'koala', 'panda', 'zebra'];

  t.deepEqual(appendA(animalsWithoutA), expectedAnimals);
  t.end();
});

test('test appendA() with a empty list', (t) => {
  const animalsWithoutA = [];
  const expectedAnimals = [];

  t.deepEqual(appendA(animalsWithoutA), expectedAnimals);
  t.end();
});
