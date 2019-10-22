/**
 * Based on this finish the function below in two ways.
 * Once without the ES6 features and once with the ES6 features.
 */

/* eslint-disable */
function carWrapper(
  model: string,
  color: string,
  year: number,
  doors: number,
  specPropName: string,
  specPropValue: boolean,
): object {
  var obj = {
    model: model,
    color: color,
    year: year,
    doors: doors
  };
  obj[specPropName] = specPropValue;
  return obj;
}

/* eslint-enable */
function ES6CarWrapper(
  model: string,
  color: string,
  year: number,
  doors: number,
  specPropName: string,
  specPropValue: boolean,
): object {
  return {
    model,
    color,
    year,
    doors,
    [specPropName]: specPropValue,
  };
}

console.log(JSON.stringify(carWrapper('Benz', 'black', 1886, 0, 'historical', true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}
console.log(JSON.stringify(ES6CarWrapper('Benz', 'black', 1886, 0, 'historical', true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}
