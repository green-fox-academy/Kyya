interface Queue<T> {
  empty(): boolean;
  peek(): T;
  add(value: T): void;
  remove(): T;
}

export default class GenericQueue<T> implements Queue<T> {
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
