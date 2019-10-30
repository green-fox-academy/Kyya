/*
  1) replace the list items' content with items from this list:
  ['apple', 'banana', 'cat', 'dog']

  2) change the <ul> element's background color to 'limegreen'
    - use css class to change the color instead of the style property
*/
const items = ['apple', 'banana', 'cat', 'dog'];

document.querySelectorAll('ul>li').forEach(li => {
  li.innerText = items.shift();
});

document.querySelector('ul').classList.add('green');