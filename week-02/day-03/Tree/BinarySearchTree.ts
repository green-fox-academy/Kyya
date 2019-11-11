import { ITree } from '../Interfaces';
import BinaryNode from './BinaryNode';

export default class BinarySearchTree<T> implements ITree<T> {
  protected root = null;

  empty(): boolean {
    return this.root === null;
  }

  add(value: T): void {
    const newNode = new BinaryNode<T>(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let x = this.root;
    let y = null;

    while (x) {
      y = x;
      if (value < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    if (y === null) {
      y = newNode;
    } else if (value < y.data) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }
  }

  __inOrder(node: BinaryNode<T>): string {
    if (!node) {
      return '^';
    }
    let output = '';
    output += this.__inOrder(node.left);
    output += node.data;
    output += this.__inOrder(node.right);
    return output;
  }

  inOrder(): string {
    return this.__inOrder(this.root);
  }

  __search(root: BinaryNode<T>, data: T): boolean {
    if (root === null || root.data === data) {
      return true;
    }
    if (root.data < data) {
      return this.__search(root.right, data);
    }
    return this.__search(root.left, data);
  }

  search(value: T): boolean {
    return this.__search(this.root, value);
  }

  __toString(node: BinaryNode<T>): string {
    if (!node) {
      return '^';
    }
    let output: string = node.data.toString();
    if (node.left || node.right) {
      output += `(${this.__toString(node.left)},${this.__toString(node.right)})`;
    }
    return output;
  }

  toString(): string {
    return this.__toString(this.root);
  }

  __remove(root: BinaryNode<T>, data: T): BinaryNode<T> {
    if (root === null) {
      return null;
    }
    if (data < root.data) {
      root.left = this.__remove(root.left, data);
    } else if (data > root.data) {
      root.right = this.__remove(root.right, data);
    } else {
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      }
      const temp = this.__minValueNode(root.right);

      root.data = temp.data;

      root.right = this.__remove(root.right, temp.data);
    }
    return root;
  }

  __minValueNode(node: BinaryNode<T>): BinaryNode<T> {
    let current = node;
    /* loop down to find the leftmost leaf */
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  remove(value: T): void {
    this.__remove(this.root, value);
  }
}
