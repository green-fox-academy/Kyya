'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio(num) {
    let res = 1
    for (let i=1; i<=num; i++)
        res*=i
    return res
}

console.log( factorio(5) )
