/*
  On the click of the button,
  Count the items in the list
  And display the result in the result element.
*/
const count = document.querySelectorAll('ul li').length;


document.querySelector('button').addEventListener('click', function() {
  document.querySelector('.result').innerText = count;
});
