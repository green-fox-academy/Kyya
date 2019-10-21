
const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes
 * have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// [5,2] [2,4] [4,6] [6,7] [7,1] [1,5]
console.log(dominoes.toString());
for (let i = 0; i < dominoes.length - 1; i++) {
  for (let j = 1; j < dominoes.length; j++) {
    if (dominoes[j].values[0] === dominoes[i].values[1]) {
      [dominoes[i + 1], dominoes[j]] = [dominoes[j], dominoes[i + 1]];
    }
  }
}
console.log(dominoes.toString());
