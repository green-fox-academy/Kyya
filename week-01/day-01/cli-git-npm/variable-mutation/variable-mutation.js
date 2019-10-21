
let a = 3;

// make it bigger by 10
a += 10;
console.log(a);

let b = 100;

// make it smaller by 7
b -= 7;
console.log(b);

let c = 44;
// double c's value
c *= 2;
console.log(c);

let d = 125;
// divide d's value by 5
d /= 5;
console.log(d);

let e = 8;
// what's the cube of e's value?
e = e * e * e;// eslint-disable-line
console.log(e);

const f1 = 123;
const f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1 > f2);
const g1 = 350;
const g2 = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
console.log((g2 * 2) > g1);

const h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
console.log(h % 11 === 0);
const i1 = 10;
const i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1 > i2 * i2 && i1 < i2 * i2 * i2);
const j = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
console.log(j % 3 === 0 || j % 5 === 0);
let k = 'Apple';
// fill the k variable with its content 4 times
k = k.repeat(4);
console.log(k);
