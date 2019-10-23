import { LinkedList } from './LinkedList.interface';
import Node from './Node';

export default class KLinkedList implements LinkedList {
  protected head: Node;

  constructor(head: Node = null) {
    this.head = head;
  }

  getAt(index: number): Node {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  add(value: string, index?: number): void {
    // if the list is empty i.e. head = null
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    if (index === undefined) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(value);
    } else {
      // if new node needs to be inserted at the front of the list i.e. before the head.
      if (index === 0) {
        this.head = new Node(value, this.head);
        return;
      }
      // else, use getAt() to find the previous node.
      const previous = this.getAt(index - 1);
      const newNode = new Node(value);
      const last = previous.next;
      previous.next = newNode;
      newNode.next = last;
    }
  }

  get(index: number): string {
    let node = this.head;
    while (index--) {
      node = node.next;
      if (!node) {
        return null;
      }
    }
    return node.element;
  }

  removeItem(value: string): void {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (node.element === value) {
        this.remove(counter);
      }
      counter++;
      node = node.next;
    }
  }

  remove(index: number): string {
    // node needs to be deleted from the front of the list i.e. before the head.
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  size(): number {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  toString(): string {
    let node = this.head;
    let output = '';
    let index = 0;
    while (node) {
      output += `${index !== 0 ? '->' : ''}${node.element}`;
      node = node.next;
      index++;
    }
    output += ` [${this.size()} item(s)]`;
    return output;
  }
}
