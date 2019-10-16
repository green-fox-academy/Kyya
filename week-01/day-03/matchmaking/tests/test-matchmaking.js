'use strict';

const test = require('tape');
const makingMatches = require('../matchmaking.js');

test('test makingMatches() with original lists', t => {
  const girls = ['Eve','Ashley','Claire','Kat','Jane'];
  const boys = ['Joe','Fred','Tom','Todd','Neef','Jeff'];
  const expectedList = ['Eve', 'Joe', 'Ashley', 'Fred', 'Claire', 'Tom', 'Kat', 'Todd', 'Jane', 'Neef', 'Jeff']

  t.deepEqual(makingMatches(girls, boys), expectedList);
  t.end();
})

test('test makingMatches() with empty lists', t => {
  t.equal(makingMatches([], []), []);
  t.end();
})
