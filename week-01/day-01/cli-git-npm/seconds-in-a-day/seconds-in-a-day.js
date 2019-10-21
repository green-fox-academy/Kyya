
const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
const pastedSeconds = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
const secondsInOneDay = 24 * 3600;

console.log(secondsInOneDay - pastedSeconds);
// Time pasted percent
// console.log(`Time pasted ${Number(pastedSeconds/secondsInOneDay*100).toFixed(2)}%`)
