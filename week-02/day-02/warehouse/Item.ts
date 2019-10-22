export default class Item {
  protected name: string;

  protected price: number;

  constructor(name: string, price = 1) {
    this.name = name;
    this.price = price;
  }

  print(): void {
    console.log(`${this.name} - ${this.price}`);
  }
}
