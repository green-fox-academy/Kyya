import { LinkedList } from './LinkedList.interface';
import Node from './Node';

export default class KLinkedList implements LinkedList {

  protected head = new Node(null);

  add(value: string, index?: number): void {
    if (index || index === 0) {
      let previous = this.head;
      for (let i = 0; previous.next && i < index; i++) {
        previous = previous.next;
      }
      previous.next = new Node(value, previous.next);
    } else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = new Node(value);
    }
  }

  get(index: number): string {
    index = Math.max(0, index);
    index = Math.min(this.size() - 1, index);

    let current = this.head.next;
    for (let i = 0; current && i < index; i++) {
      current = current.next;
    }
    if (current) {
      return current.data;
    }
    return null;
  }

  removeItem(value: string): void {
    let previous = this.head;
    while (previous.next && previous.next.data !== value) {
      previous = previous.next;
    }
    previous.next = previous.next.next;
  }

  remove(index: number): string {
    let previous = this.head;
    for (let i = 0; previous.next && i < index; i++) {
      previous = previous.next;
    }
    if (index >= 0 && previous.next) {
      const old = previous.next.data;
      previous.next = previous.next.next;
      return old;
    }
    return null;
  }

  size(): number {
    let counter = 0;
    let start = this.head;
    while (start.next) {
      counter++;
      start = start.next;
    }
    return counter;
  }

  toString(): string {
    let node = this.head;
    let output = '';
    let index = 0;
    while (node.next) {
      output += `${index !== 0 ? '->' : ''}${node.next.data}`;
      node = node.next;
      index++;
    }
    output += ` [${this.size()} item(s)]`;
    return output;
  }
}
