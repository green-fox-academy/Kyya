const Sharpie = require('./Sharpie');
const SharpieSet = require('./SharpieSet');

const set = new SharpieSet([
  new Sharpie('black', 10, 40),
  new Sharpie('blue', 11, 0),
  new Sharpie('red', 12, 40),
]);

console.log(set.countUsable());
set.removeTrash();
console.log(set.list);
