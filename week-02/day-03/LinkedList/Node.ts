import { INode } from '../Interfaces';

export default class Node<T> implements INode<T> {
  public data: T;

  public next: Node<T>;

  constructor(data: T, next: Node<T> = null) {
    this.data = data;
    this.next = next;
  }
}
