'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('click', function(ev) {
  if (ev.x > 0 && ev.x <= 200) {
    this.dispatchEvent(new CustomEvent('left-side-click'))
  } else if (ev.x > 200 && ev.x <= 400) {
    this.dispatchEvent(new CustomEvent('right-side-click'));
  }
})

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});
