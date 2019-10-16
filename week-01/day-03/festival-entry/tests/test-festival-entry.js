'use strict';

const test = require('tape');
const securityCheck = require('../festival-entry.js');

test('test securityCheck() with original list', t => {
  const queue = [
  	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
  	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
  	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
  	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
  	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
  	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
  	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
  ];

  t.deepEqual(securityCheck(queue), ['Tibi', 'Anna', 'Rob', 'Joerg']);
  t.end();
});

test('test securityCheck() with custom list', t => {
  const queue = [
  	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 0 },
  	{ 'name': 'Tibi', 'alcohol': 30, 'guns': 2 },
  	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 0 },
  	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 }
  ];

  t.deepEqual(securityCheck(queue), ['Amanda', 'Dolores']);
  t.end();
});
