import { IQueue } from '../Interfaces';

export default class Queue<T> implements IQueue<T> {
  protected elements: T[] = [];

  empty(): boolean {
    return this.elements.length === 0;
  }

  peek(): T {
    return this.elements[0];
  }

  add(value: T): void {
    this.elements.push(value);
  }

  remove(): T {
    return this.elements.shift();
  }

  toString(): string {
    return this.elements.toString();
  }
}
