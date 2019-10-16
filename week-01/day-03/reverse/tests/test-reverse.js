'use strict';

const test = require('tape');
const reverse = require('../reverse.js');

test('test reverse() with original string', t => {
  const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
  const expected = "If the meanings of true and false were switched, this sentence wouldn't be false.";

  t.equal(reverse(reversed), expected);
  t.end();
})
