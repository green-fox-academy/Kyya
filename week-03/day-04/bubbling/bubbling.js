/*
  Here is an image inspector, but the buttons are not implemented yet, that will
  be your task!
    - the nav buttons (up, down, left, right) move the background by 10px
    - the zoom buttons increase/decrease the image by 20%
    - attach only two event listeners to the nav element
      - one for navigation
      - one for zooming
*/

const spector = document.querySelector('.img-inspector');

const pos = { x: 0, y: 0};
let zoom = 200;

document.querySelector('nav').addEventListener('click', function(ev) {
  const { action, direction } = ev.target.dataset
  if (action == 'move') {
    if (direction == 'up') {
      pos.y += -10;
    } else if (direction == 'down') {
      pos.y += 10;
    } else if (direction == 'left') {
      pos.x -= 10;
    } else if (direction == 'right') {
      pos.x += 10;
    }
    spector.style.backgroundPosition = `${pos.x}px ${pos.y}px`;
  }
});

document.querySelector('nav').addEventListener('click', function(ev) {
  const { action, direction } = ev.target.dataset;
  if (action == 'zoom') {
    if (direction == 'in') {
      zoom += 20;
    } else if (direction == 'out') {
      zoom += -20;
    }
    spector.style.backgroundSize = `${zoom}%`;
  }
});

