'use strict';

require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300)
});

// Your solution here
promise.then(console.log);
