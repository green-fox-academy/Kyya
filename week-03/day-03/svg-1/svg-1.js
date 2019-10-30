/*
  1) Select the rectangle by the ID: "very-rectangle"
  2) Change the rectangle's position to x:50, y:50
  3) Change its fill to tomato
*/

const svg = document.querySelector('#very-rectangle');
svg.setAttribute('x', 50);
svg.setAttribute('y', 50);
svg.style.fill = 'tomato';