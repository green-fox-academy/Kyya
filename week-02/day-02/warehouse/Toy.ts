import Item from './Item';

export default class Toy extends Item {
  protected color: string;

  constructor(name, price, color: string) {
    super(name, price);
    this.color = color;
  }

  print(): void {
    console.log(`${this.color} ${this.name} - ${this.price}`);
  }
}
