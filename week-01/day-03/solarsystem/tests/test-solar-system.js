'use strict';

const test = require('tape');
const putSaturn = require('../solar-system.js');

test('test putSaturn() with original list', t => {
  const planetList = ['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
  const expected = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  t.deepEqual(putSaturn(planetList), expected);
  t.end();
});

test('test putSaturn() with empty list', t => {
  t.deepEqual(putSaturn([]), []);
  t.end();
});
