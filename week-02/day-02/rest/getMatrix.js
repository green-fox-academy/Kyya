/* eslint-disable */
function getMatrix() {
  var rows = Array.prototype.shift.call(arguments);
  var columns = Array.prototype.shift.call(arguments);

  if (arguments.length < (rows * columns)) {
    return null;
  }

  var elements = [];
  for (var i = 0; i < rows; i++) {
     elements[i] = [];
    for (var j = 0; j < columns; j++) {
      elements[i].push(Array.prototype.shift.call(arguments));
    }
  }
  return elements
}

console.log(getMatrix(2, 2, 1, 2, 3, 4));
