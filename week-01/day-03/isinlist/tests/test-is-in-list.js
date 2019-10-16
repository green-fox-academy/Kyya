'use strict';

const test = require('tape');
const checkNums = require('../is-in-list.js');

test('test checkNums with list which contains 4, 8, 12, 16', t => {
  const goodList = [2, 4, 6, 8, 10, 12, 14, 16];

  t.ok(checkNums(goodList));
  t.end();
});

test('test checkNums with list which doesn\'t contains 4, 8, 12, 16', t => {
  const badList = [2, 4, 6, 8];
  
  t.notOk(checkNums(badList));
  t.end();
});

test('test checkNums with empty list', t => {
  t.notOk(checkNums([]));
  t.end();
});
