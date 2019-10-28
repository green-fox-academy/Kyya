import { ITree } from '../Interfaces';
import BinaryNode from './BinaryNode';
import Queue from '../Queue/Queue';

export default class BinaryTree<T> implements ITree<T> {
  protected root = null;

  empty(): boolean {
    return this.root === null;
  }

  add(value: T): void {
    this.root = new BinaryNode(value, this.root, null);
  }

  remove(value: T): void {
    function deleteDeepest(root: BinaryNode<T>, dNode: BinaryNode<T>): void {
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
    function innerRemove(root: BinaryNode<T>, data: T): BinaryNode<T> {
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
      // Do level order traversal to find deepest
      // node(temp) and node to be deleted (key_node)
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
        deleteDeepest(root, temp);
        keyNode.data = x;
      }
      return root;
    }
    innerRemove(this.root, value);
  }

  search(value: T): boolean {
    function preSearch(root: BinaryNode<T>, data: T): boolean {
      if (root === null) {
        return false;
      }
      if (root.data === data) {
        return true;
      }
      const res1 = preSearch(root.left, data);
      const res2 = preSearch(root.right, data);
      return res1 || res2;
    }
    return preSearch(this.root, value);
  }

  // pre order
  preOrder(): string {
    function innerPreOrder(node: BinaryNode<T>): string {
      if (!node) {
        return '^';
      }
      let output = '';
      output += node.data;
      output += innerPreOrder(node.left);
      output += innerPreOrder(node.right);
      return output;
    }
    return innerPreOrder(this.root);
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

  // post order
  postOrder(): string {
    function innerPostOrder(node: BinaryNode<T>): string {
      if (!node) {
        return '^';
      }
      let output = '';
      output += innerPostOrder(node.left);
      output += innerPostOrder(node.right);
      output += node.data;
      return output;
    }
    return innerPostOrder(this.root);
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
}
