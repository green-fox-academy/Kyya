import LinkedList from '../LinkedList/LinkedList';
import { IStack } from '../Interfaces';

export default class LinkedStack<T> extends LinkedList<T> implements IStack<T> {
  empty(): boolean {
    return this.head.next === null;
  }

  peek(): T {
    let current = this.head;
    while (current.next) {
      current = current.next
    }
    return current.data;
  }

  push(value: T): void {
    this.add(value);
  }

  pop(): T {
    return this.remove(Math.max(this.size() - 1, 0));
  }
}
