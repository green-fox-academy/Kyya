/**
 * Write a solution that uses no ES6 functionality but provides set-like behavior.
 * It's enough to store and read data,
 * you don't have to implement every feature of the ES6 Set class.
 * Write a short code that presents your code's features as an example.
 */

/* eslint-disable */
const KSet = require('./KSet');

const setEntity = new KSet();

// check add elements
setEntity
  .add(1)
  .add(2)
  .add(1);

console.log(setEntity);

// for of
for (var item of setEntity) {
  console.log(item);
}

// check `has` method
console.log(setEntity.has(1));
console.log(setEntity.has(3));
