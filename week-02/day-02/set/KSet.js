/* eslint-disable */
function KSet() {
  Array.call(this);
}

// KSet inherit Array
KSet.prototype = Object.create(Array.prototype);
KSet.prototype.constructor = KSet;

// The add method checks elements which promises that each element will be unique.
// The add method returns `this` which provides a chained call.
KSet.prototype.add = function(element) {
  if (this.indexOf(element) === -1) {
    this.push(element);
  }
  return this;
}

KSet.prototype.has = function(element) {
  return this.indexOf(element) !== -1;
}

module.exports = KSet;
