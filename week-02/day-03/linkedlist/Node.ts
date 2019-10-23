export default class Node {
  public data: string;

  public next: Node;

  constructor(data: string, next: Node = null) {
    this.data = data;
    this.next = next;
  }
}
