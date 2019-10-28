import Queue from './Queue';

const queue = new Queue();

console.log('\n▶ Call `add` method then print on queue.');
queue.add('apple');
queue.add('orange');
queue.add('banana');
console.log(queue.toString());

console.log('\n▶ Check whether queue is empty.');
console.log(queue.empty());

console.log('\n▶ Call `remove` method on queue.');
console.log(queue.remove());
console.log(queue.toString());

console.log('\n▶ Get peek value on queue.');
console.log(queue.peek());
