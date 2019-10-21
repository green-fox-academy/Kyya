
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
function printer(...params) {
  console.log(params);
}

printer(1, 2, 3);
printer('a', 'b', 'c', 'd');
