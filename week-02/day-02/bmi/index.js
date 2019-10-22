/**
 * Write a function that takes an object with mass and height fields.
 * Return a new object with the original fields and a new bmi field with the calculated bmi value.
 */

/* eslint-disable */
function calculateBMI(obj) {
  if (obj && obj.mass && obj.height) {
    return { ...obj, bmi: obj.mass / (obj.height * obj.height) };
  }
  return undefined;
}

console.log(calculateBMI({ mass: 60, height: 1.78 }));
console.log(calculateBMI({ mass: 60 }));
console.log(calculateBMI());
