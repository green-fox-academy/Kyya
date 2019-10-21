import { Printable } from './Printable';

export default class Domino implements Printable {
  protected values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  printAllFields(): void {
    console.log(`[${this.values[0]}|${this.values[1]}]`);
  }
}
