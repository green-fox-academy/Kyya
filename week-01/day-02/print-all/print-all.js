'use strict';

// - Create a variable named `af` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `af` to the console*
// *hint: use a loop, console.log(af) won't cut it
// - bonus for using the correct built in array method
const af = [4, 5, 6, 7]

// solution 1
af.forEach(e=>console.log(e))

// bad example
// af.forEach(console.log)

// solution 2
console.log(af.join(' '))
