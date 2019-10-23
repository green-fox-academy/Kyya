import BinaryTree from './BinaryTree';
import BinarySearchTree from './BinarySearchTree';

const tree = new BinaryTree<string>();

tree.add('D');
tree.add('C');
tree.add('B');
tree.add('A');

console.log('\n▶ Print Generic tree.');
console.log(tree.toString());

console.log('\n▶ Print Pre Order tree.');
console.log(tree.preOrder());

console.log('\n▶ Print In Order tree.');
console.log(tree.inOrder());

console.log('\n▶ Print Post Order tree.');
console.log(tree.postOrder());

console.log('\n▶ Remove a specified value(B), then print the tree.');
tree.remove('B');
console.log(tree.toString());

const treeOfSearch = new BinarySearchTree<number>();

treeOfSearch.add(12);
treeOfSearch.add(33);
treeOfSearch.add(100);
treeOfSearch.add(24);

console.log('\n▶ Print Binary Search Tree.');
console.log(treeOfSearch.toString());

console.log('\n▶ Print In Order Binary Search Tree.');
console.log(treeOfSearch.inOrder());

console.log('\n▶ Remove a specified value(33), then print the tree.');
treeOfSearch.remove(33);
console.log(treeOfSearch.inOrder());

console.log('\n▶ Check whether a specified value(24) exists.');
console.log(treeOfSearch.search(24));
