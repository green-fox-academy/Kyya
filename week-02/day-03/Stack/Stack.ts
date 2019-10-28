import { IStack } from '../Interfaces';

export default class Stack<T> implements IStack<T> {
  protected elements: T[] = [];

  push(value: T): void {
    this.elements.unshift(value);
  }

  pop(): T {
    return this.elements.shift();
  }

  empty(): boolean {
    return this.elements.length === 0;
  }

  peek(): T {
    return this.elements[0];
  }

  toString(): string {
    return this.elements.toString();
  }
}
