/**
 * Write a function that takes an object and
 * returns the names of it's fields if they have primitive types as values.
 */

/* eslint-disable */

function isPrimitive(value) {
  var type = typeof value;
  return value == null || (type != "object" && type != "function");
}

function primitiveFields(target) {
  const result = [];
  for (const [key, value] of Object.entries(target)) {
    if (isPrimitive(value)) {
      result.push(key);
    }
  }
  return result;
}

// should return
// ['x','y']
console.log(primitiveFields({ x: 1, y: true, z: [] }));
