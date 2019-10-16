'use strict';

const test = require('tape');
const calculator = require('../calculator.js');

test('test calculator with sum', t => {
  t.equal(calculator(['+', '1', '2']), 3);
  t.end();
});

test('test calculator with subtraction', t => {
  t.equal(calculator(['-', '2', '1']), 1);
  t.end();
});

test('test calculator with multiplication', t => {
  t.equal(calculator(['*', '2', '4']), 8);
  t.end();
});

test('test calculator with division', t => {
  t.equal(calculator(['/', '4', '2']), 2);
  t.end();
});

test('test calculator with modulo', t => {
  t.equal(calculator(['%', '8', '5']), 3);
  t.end();
});
