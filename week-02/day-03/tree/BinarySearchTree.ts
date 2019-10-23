import { ITree } from '../interfaces';
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
    // If the root is NULL i.e the tree is empty
    // The new node is the root node
    if (y === null) {
      y = newNode;
    } else if (value < y.data) {
      // If the new key is less then the leaf node key
      // Assign the new node to be its left child
      y.left = newNode;
    } else {
      // else assign the new node its right child
      y.right = newNode;
    }
    // Returns the pointer where the
    // new node is inserted
    // return y;
  }

  // in order
  inOrder(): string {
    function innerInOrder(node: BinaryNode<T>): string {
      if (!node) {
        return '^';
      }
      let output = '';
      output += innerInOrder(node.left);
      output += node.data;
      output += innerInOrder(node.right);
      return output;
    }
    return innerInOrder(this.root);
  }

  search(value: T): boolean {
    function innerSearch(root: BinaryNode<T>, data: T): boolean {
      if (root === null || root.data === data) {
        return true;
      }
      if (root.data < data) {
        return innerSearch(root.right, data);
      }
      return innerSearch(root.left, data);
    }
    return innerSearch(this.root, value);
  }

  toString(): string {
    function innerToString(node: BinaryNode<T>): string {
      if (!node) {
        return '^';
      }
      let output: string = node.data.toString();
      if (node.left || node.right) {
        output += `(${innerToString(node.left)},${innerToString(node.right)})`;
      }
      return output;
    }
    return innerToString(this.root);
  }

  remove(value: T): void {
    function minValueNode(node: BinaryNode<T>): BinaryNode<T> {
      let current = node;
      /* loop down to find the leftmost leaf */
      while (current && current.left) {
        current = current.left;
      }
      return current;
    }
    function innerRemove(root: BinaryNode<T>, data: T): BinaryNode<T> {
      if (root === null) {
        return null;
      }
      // If the key to be deleted is smaller than the root's key,
      // then it lies in left subtree
      if (data < root.data) {
        root.left = innerRemove(root.left, data);
      } else if (data > root.data) {
        // If the key to be deleted is greater than the root's key,
        // then it lies in right subtree
        root.right = innerRemove(root.right, data);
      } else {
        // if key is same as root's key, then This is the node
        // to be deleted
        // node with only one child or no child
        if (root.left === null) {
          return root.right;
        }
        if (root.right === null) {
          return root.left;
        }
        // node with two children: Get the in-order successor (smallest
        // in the right subtree)
        const temp = minValueNode(root.right);

        // Copy the in-order successor's content to this node
        root.data = temp.data;

        // Delete the in-order successor
        root.right = innerRemove(root.right, temp.data);
      }
      return root;
    }
    innerRemove(this.root, value);
  }
}
