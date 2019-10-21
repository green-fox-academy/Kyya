import Domino from './Domino';
import Todo from './Todo';

const listOfDominoes = [
  new Domino(1, 2),
  new Domino(2, 4),
  new Domino(4, 7),
];

const listOfTodos = [
  new Todo('Stand up'),
  new Todo('Eat lunch'),
  new Todo('Get milk', true),
];

for (const domino of listOfDominoes) {
  domino.printAllFields();
}

for (const todo of listOfTodos) {
  todo.printAllFields();
}
