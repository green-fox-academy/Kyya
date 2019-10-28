import LinkedStack from './LinkedStack';

const stack = new LinkedStack<string>();

console.log('\n▶ Push some items.');
stack.push('C');
stack.push('B');
stack.push('A');
console.log(stack.toString());
console.log('\n▶ Pop item, then print the stack.')
stack.pop();
console.log(stack.toString());
console.log('\n▶ Print whether the stack is empty.')
console.log(stack.empty());
console.log('\n▶ Print stack peek item.');
console.log(stack.peek());
