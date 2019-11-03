var promise1 = Promise.resolve('SECRET VALUE');

var promise2 = Promise.reject(new Error('SECRET ERROR VALUE'));

promise2.catch(err => {
  console.log(err);
})