
const test = require('tape');
const sweets = require('../candyshop.js');

test('test sweets() with original list', (t) => {
  const expected = ['Cupcake', 'Croissant', 'Brownie', 'Ice cream'];
  const actual = ['Cupcake', 2, 'Brownie', false];

  t.deepEqual(sweets(actual), expected);
  t.end();
});

test('test sweets() with empty list', (t) => {
  const expected = [];
  const actual = [];

  t.deepEqual(sweets(actual), expected);
  t.end();
});
