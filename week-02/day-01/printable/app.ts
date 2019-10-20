import { Domino, Todo } from './printable';

const dominoes = [
    new Domino(1, 2),
    new Domino(2, 4),
    new Domino(4, 7)
]
const todos = [
    new Todo('Stand up'),
    new Todo('Eat lunch'),
    new Todo('Get milk', true)
]

for (let domino of dominoes) {
    domino.printAllFields();
}

for (let todo of todos) {
    todo.printAllFields();
}
