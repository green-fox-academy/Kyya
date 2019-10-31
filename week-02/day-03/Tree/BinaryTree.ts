import { ITree } from '../Interfaces';
import BinaryNode from './BinaryNode';
import Queue from '../Queue/Queue';

export default class BinaryTree<T> implements ITree<T> {
  protected root = null;

  empty(): boolean {
    return this.root === null;
  }

  add(value: T): void {
    if (this.root === null) {
      this.root = new BinaryNode<T>(value);
    } else {
      const q = new Queue<BinaryNode<T>>();
      q.add(this.root);
      while (q.length > 0) {
        const node = q.remove();
        if (node.left) {
          q.add(node.left);
        } else {
          node.left = new BinaryNode<T>(value);
          return;
        }
        if (node.right) {
          q.add(node.right);
        } else {
          node.right = new BinaryNode<T>(value);
          return;
        }
      }
    }
  }

  __breadthTraversing(root: BinaryNode<T>, callback?: Function): void {
    if (root === null) {
      return;
    }
    const q = new Queue<BinaryNode<T>>();
    q.add(root);
    while (q.length > 0) {
      const node = q.remove();
      callback(node);
      if (node.left) {
        q.add(node.left);
      }
      if (node.right) {
        q.add(node.right);
      }
    }
  }
  breadthTraversing(callback?: Function): void {
    return this.__breadthTraversing(this.root, callback);
  }

  __deleteDeepest(root: BinaryNode<T>, dNode: BinaryNode<T>): void {
    const q = new Queue<BinaryNode<T>>();
    q.add(root);

    // Do level order traversal until last node
    let temp: BinaryNode<T>;
    while (!q.empty()) {
      temp = q.remove();
      if (temp === dNode) {
        temp = null;
        return;
      }
      if (temp.right) {
        if (temp.right === dNode) {
          temp.right = null;
          return;
        } else { // eslint-disable-line
          q.add(temp.right);
        }
      }
      if (temp.left) {
        if (temp.left === dNode) {
          temp.left = null;
          return;
        } else { // eslint-disable-line
          q.add(temp.left);
        }
      }
    }
  }

  __remove(root: BinaryNode<T>, data: T): BinaryNode<T> {
    if (root === null) {
      return null;
    }

    if (root.left === null && root.right === null) {
      if (root.data === data) {
        return null;
      }
      return root;
    }
    const q = new Queue<BinaryNode<T>>();
    q.add(root);
    let temp: BinaryNode<T>;
    let keyNode: BinaryNode<T> = null;
    while (!q.empty()) {
      temp = q.remove();
      if (temp.data === data) {
        keyNode = temp;
      }
      if (temp.left) {
        q.add(temp.left);
      }
      if (temp.right) {
        q.add(temp.right);
      }
    }
    if (keyNode) {
      const x = temp.data;
      this.__deleteDeepest(root, temp);
      keyNode.data = x;
    }
    return root;
  }

  remove(value: T): void {
    this.__remove(this.root, value);
  }

  __preSearch(root: BinaryNode<T>, data: T): boolean {
    if (root === null) {
      return false;
    }
    if (root.data === data) {
      return true;
    }
    const res1 = this.__preSearch(root.left, data);
    const res2 = this.__preSearch(root.right, data);
    return res1 || res2;
  }

  search(value: T): boolean {
    return this.__preSearch(this.root, value);
  }

  __preOrder(node: BinaryNode<T>, callback?: Function): string {
    if (!node) {
      return '^';
    }
    let output = '';
    output += node.data;
    if (callback) {
      callback(node);
    }
    output += this.__preOrder(node.left, callback);
    output += this.__preOrder(node.right, callback);
    return output;
  }

  preOrder(callback?: Function): string {
    return this.__preOrder(this.root, callback);
  }

  __inOrder(node: BinaryNode<T>, callback?: Function): string {
    if (!node) {
      return '^';
    }
    let output = '';
    output += this.__inOrder(node.left, callback);
    output += node.data;
    if (callback) {
      callback(node);
    }
    output += this.__inOrder(node.right, callback);
    return output;
  }

  inOrder(callback?: Function): string {
    return this.__inOrder(this.root, callback);
  }

  __postOrder(node: BinaryNode<T>, callback?: Function): string {
    if (!node) {
      return '^';
    }
    let output = '';
    output += this.__postOrder(node.left, callback);
    output += this.__postOrder(node.right, callback);
    output += node.data;
    if (callback) {
      callback(node);
    }
    return output;
  }

  postOrder(callback?: Function): string {
    return this.__postOrder(this.root, callback);
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
}
