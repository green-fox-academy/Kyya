import Item from './Item';

export default class Tool extends Item {
  protected condition = 'good';

  print(): void {
    console.log(`${this.condition} ${this.name} - ${this.price}`);
  }
}
