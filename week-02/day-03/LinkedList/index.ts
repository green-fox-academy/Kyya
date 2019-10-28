import LinkedList from './LinkedList';

const list = new LinkedList<string>();

list.add('apple');
list.add('orange');
list.add('pineapple');
list.add('watermelon');

console.log('\n▶ Print the list.');
console.log(list.toString());

console.log('\n▶ Insert `pear` at the front of list.');
list.add('pear', 0);
console.log(list.toString());

console.log('\n▶ Insert `banana` before the apple.');
list.add('banana', 1);
console.log(list.toString());

console.log('\n▶ Get item by specified index.');
console.log(`Position at 0: ${list.get(0)}`);
console.log(`Position at 1: ${list.get(1)}`);
// out of range
console.log(`Position at 100: ${list.get(100)}`);
console.log(`Position at -1: ${list.get(-1)}`);

console.log('\n▶ Remove item by specified value(pineapple).');
list.removeItem('pineapple');
console.log(list.toString());

console.log('\n▶ Remove item by specified index(2).');
list.remove(2);
console.log(list.toString());
