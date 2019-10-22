import Item from './Item';

export default class Warehouse {
  protected itemList: Item[] = [];

  addItem(item: Item): void {
    if (item instanceof Item) {
      this.itemList.push(item);
    }
  }

  printItemsOfType(type: Function): void {
    this.itemList
      .filter((item) => (item instanceof type))
      .map((item) => item.print());
  }
}
