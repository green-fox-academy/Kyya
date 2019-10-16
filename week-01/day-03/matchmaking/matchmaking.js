'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

// 0 2 4 6
const girls = ["Eve","Ashley","Claire","Kat","Jane"];
// 1 3 5 7
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

function makingMatches(g, b) {
    const originLength = g.length + b.length
    const copyG = [...g]
    const copyB = [...b]
    const out = []
    for (let i=0; i<originLength; i++) 
    {
        if (i%2==0) {// girls' turn | if no girl, push boy
            out.push(copyG.length == 0 ? copyB.shift() : copyG.shift())
        } else { // boys' turn | if no boy, push girl
            out.push(copyB.length == 0 ? copyG.shift() : copyB.shift())
        }
    }
    return out
}
console.log(makingMatches(girls, boys));

module.exports = makingMatches;
