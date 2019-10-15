'use strict';

// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console
const t = [1, 2, 3, 4, 5]

function increase(target, index, num) {
    target[index] += num
    console.log(target[index])
}

increase(t, 2, 2)
