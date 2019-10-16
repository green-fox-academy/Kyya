'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
function appendA(list) {
    return list.map(item=>item+'a')
}
console.log(appendA(far));
module.exports = appendA;
