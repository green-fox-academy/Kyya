export default class Node {
  public element: string;

  public next: Node;

  constructor(element: string, next: Node = null) {
    this.element = element;
    this.next = next;
  }
}
