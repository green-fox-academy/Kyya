import { Queue } from './queue.interface';

export default class KQueue implements Queue {
  protected elements: string[] = [];

  empty(): boolean {
    return this.elements.length === 0;
  }

  peek(): string {
    return this.elements[0];
  }

  add(value: string): void {
    this.elements.push(value);
  }

  remove(): string {
    return this.elements.shift();
  }

  toString(): string {
    return this.elements.toString();
  }
}
