import KStack from './stack';

const stack = new KStack();

console.log('\n▶ Call `push` method, then print the stack.');
stack.push('apple');
stack.push('orange');
stack.push('banana');
console.log(stack.toString());

console.log('\n▶ Check whether the stack is empty.');
console.log(stack.empty());

console.log('\n▶ Call `pop` method on the stack, then print the stack.');
console.log(stack.pop());
console.log(stack.toString());

console.log('\n▶ Call `peak` method on the stack, then print the stack.');
console.log(stack.peek());
console.log(stack.toString());
