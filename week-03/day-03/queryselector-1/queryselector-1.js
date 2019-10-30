/*
  1. store the element that says 'The King' in the 'king' variable.
  console.log it.

  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.
  console.log each of them.

  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.

  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.
 */
const king = document.querySelector('#b325');
console.log(king);

const businessLamp = document.querySelectorAll('.asteroid.big');
console.log(businessLamp);

const conceitedKing = document.querySelectorAll('.asteroid:not(.big)');
conceitedKing.forEach(alert);