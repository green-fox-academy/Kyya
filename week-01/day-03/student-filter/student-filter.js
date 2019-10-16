'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function findSomeoneHasMoreThanFourCandies(targets) {
  return targets.filter(i=>i.candies>4).map(i=>i.name)
}
console.log(findSomeoneHasMoreThanFourCandies(students))
// create a function that takes a list of students and logs: 
//  - how many candies they have on average
function calcAverageCandy(targets) {
  return targets.map(i=>i.candies).reduce((accu, current)=>accu+current) / targets.length
}
console.log(calcAverageCandy(students))
