import { IBinaryNode } from '../Interfaces';

export default class BinaryNode<T> implements IBinaryNode<T> {
  public data: T;

  public left: BinaryNode<T>;

  public right: BinaryNode<T>;

  constructor(data: T, left: BinaryNode<T> = null, right: BinaryNode<T> = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
