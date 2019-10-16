'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function printer(name, seconds) {
    setTimeout(
        () => console.log(name),
        seconds * 1000
    )
}

console.log('apple')
printer('pear', 1)
printer('melon', 3)
printer('grapes', 5)
