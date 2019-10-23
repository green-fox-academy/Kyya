import LinkedList from './LinkedList';

const list = new LinkedList();

list.add('apple');
list.add('orange');
list.add('pineapple');
list.add('watermelon');

console.log('\nPrint the list.');
console.log(list.toString());

console.log('\nInsert `pear` at the front of list.');
list.add('pear', 0);
console.log(list.toString());

console.log('\nInsert `banana` before the apple.');
list.add('banana', 1);
console.log(list.toString());

console.log('\nGet item by specified index.');
console.log(`Position at 0: ${list.get(0)}`);
console.log(`Position at 1: ${list.get(1)}`);
// out of range
console.log(`Position at 100: ${list.get(100)}`);
console.log(`Position at -1: ${list.get(-1)}`);

console.log('\nRemove item by specified value.');
list.removeItem('pineapple');
console.log(list.toString());

console.log('\nRemove item by specified index.');
list.remove(2);
console.log(list.toString());

// expect output
/**
 * Print the list.
 * apple->orange->pineapple->watermelon [4 item(s)]
 *
 * Insert `pear` at the front of list.
 * pear->apple->orange->pineapple->watermelon [5 item(s)]
 *
 * Insert `banana` before the apple.
 * pear->banana->apple->orange->pineapple->watermelon [6 item(s)]
 *
 * Get item by specified index.
 * Position at 0: pear
 * Position at 1: banana
 * Position at 100: null
 * Position at -1: null
 *
 * Remove item by specified value.
 * pear->banana->apple->orange->watermelon [5 item(s)]
 *
 * Remove item by specified index.
 * pear->banana->orange->watermelon [4 item(s)]
 */
