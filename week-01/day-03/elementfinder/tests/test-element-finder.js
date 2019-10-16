'use strict';

const test = require('tape');
const containsSeven = require('../element-finder.js');

test('test containsSeven with original list', t => {
  const numbers = [1, 2, 3, 4, 5, 6, 8];

  t.equal(containsSeven(numbers), 'Noooooo');
  t.end();
});

test('test containsSeven with 7 in the list', t => {
  const numbers = [1, 2, 3, 4, 5, 6, ,7, 8];

  t.equal(containsSeven(numbers), 'Hoorray');
  t.end();
});

test('test containsSeven with empty list', t => {
  const numbers = [];

  t.equal(containsSeven(numbers), 'Noooooo');
  t.end();
})
