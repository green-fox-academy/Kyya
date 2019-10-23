import { Stack } from './stack.interface';

export default class KStack implements Stack {
  protected elements: string[] = [];

  push(value: string): void {
    this.elements.unshift(value);
  }

  pop(): string {
    return this.elements.shift();
  }

  empty(): boolean {
    return this.elements.length === 0;
  }

  peek(): string {
    return this.elements[0];
  }

  toString(): string {
    return this.elements.toString();
  }
}
