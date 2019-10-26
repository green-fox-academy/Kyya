import { IQueue } from '../interfaces';
import Stack from '../Stack/stack';

export default class StackQueue<T> implements IQueue<T> {
  protected stack1: Stack<T>;

  protected stack2: Stack<T>;

  constructor() {
    this.stack1 = new Stack<T>();
    this.stack2 = new Stack<T>();
  }

  empty(): boolean {
    return this.stack1.empty();
  }

  peek(): T {
    return this.stack1.peek();
  }

  add(value: T): void {
    // Move all elements from s1 to s2
    while (!this.stack1.empty()) {
      this.stack2.push(this.stack1.pop());
    }
    // Push item into s1
    this.stack1.push(value);
    // Push everything back to s1
    while (!this.stack2.empty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  remove(): T {
    // if first stack is empty
    if (this.stack1.empty()) {
      return null;
    }
    // Return top of s1
    return this.stack1.pop();
  }

  toString(): string {
    return this.stack1.toString();
  }
}
