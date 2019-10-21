
const test = require('tape');
const quoteSwap = require('../quote-swap.js');


test('test quoteSwap() with original list', (t) => {
  const words = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
  const expected = 'What I cannot create I do not understand.';

  t.equal(quoteSwap(words), expected);
  t.end();
});
