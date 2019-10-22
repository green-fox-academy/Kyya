import Warehouse from './Warehouse';
import Item from './Item';
import Toy from './Toy';
import Tool from './Tool';

// this snippet is for testing your code
const wh = new Warehouse();

wh.addItem(new Item('vase', 30));
wh.addItem(new Toy('pebble', undefined, 'grey'));
wh.addItem(new Toy('car', 10, 'blue'));
wh.addItem(new Tool('hammer', 25));

console.log('\n===== Items =====');
wh.printItemsOfType(Item);

console.log('\n===== Toys =====');
wh.printItemsOfType(Toy);

console.log('\n===== Tools =====');
wh.printItemsOfType(Tool);
