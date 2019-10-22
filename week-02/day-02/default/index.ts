/**
 * Write a function that returns a string.
 * Possible values are "coffee", "coffee with sugar",
 * "coffee with milk", "coffee with sugar and with milk".
 * The function should take two parameters,
 * "sugar" and "milk", with default "false" boolean value.
 */

/* eslint-disable */
function getCoffee(sugar, milk): string {
  if (sugar === undefined) {
    sugar = false;
  }
  if (milk === undefined) {
    milk = false;
  }
  if (sugar && !milk) {
    return 'coffee with sugar';
  }
  if (!sugar && milk) {
    return 'coffee with milk';
  }
  if (sugar && milk) {
    return 'coffee with sugar and with milk';
  }
  return 'coffee';
}

/* eslint-enable */
function getCoffeeES6(sugar = false, milk = false): string {
  if (sugar && !milk) {
    return 'coffee with sugar';
  }
  if (!sugar && milk) {
    return 'coffee with milk';
  }
  if (sugar && milk) {
    return 'coffee with sugar and with milk';
  }
  return 'coffee';
}

export {
  getCoffee,
  getCoffeeES6,
};
