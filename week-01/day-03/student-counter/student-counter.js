'use strict';

const students = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
]

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether
function sumCandies(targets) {
  return targets.map(s=>s.candies).reduce((accu, current)=>accu + current)
}
console.log(sumCandies(students))
// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies
function sumAge(targets) {
  return targets.filter(i=>i.candies<5).map(i=>i.age).reduce((accu, current)=>accu + current)
}
console.log(sumAge(students))
