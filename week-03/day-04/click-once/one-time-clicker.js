/*
  Create an event listener which logs the current timestamp to the console once the button is clicked.
  When the button is clicked for the second or any other times no event listener should be called.
  Try to solve this two different ways.
  hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
*/

// solution 1
document.querySelector('button').addEventListener('click', function() {
  console.log(new Date().getTime());
}, { once: true });

// solution 2
const handler = function() {
  console.log(new Date().getTime());
  document.querySelector('button').removeEventListener('click', handler);
}

document.querySelector('button').addEventListener('click', handler);