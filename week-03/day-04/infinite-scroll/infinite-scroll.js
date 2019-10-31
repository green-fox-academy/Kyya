let scrollThreshold = 300;
let container = document.querySelector('.container');

// from Internet
function throttle(func, delay) {
  let timer = null;
  let startTime = Date.now();

  return function() {
    let curTime = Date.now();
    let remaining = delay - (curTime - startTime);
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  }
}

function getScrollBottom() {
  const element = document.documentElement;
  return element.scrollHeight - element.scrollTop - element.clientHeight;
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = [...Array(6)].map(() => letters[Math.floor(Math.random() * 16)]).join('')
  return `#${color}`;
}

function createElements(number = 1) {
  for (let i = 0; i < number; i++) {
    let div = document.createElement('div');
    div.className = 'item';
    div.style.backgroundColor = getRandomColor();
    container.append(div);
  }
}

function scrollHandler() {
  if (getScrollBottom() < scrollThreshold) {
    createElements(10);
  }
}

window.onload = function() {
  createElements(10);
  window.addEventListener('scroll', throttle(scrollHandler, 200))
}

