import { Queue } from '../queue/queue.interface';
import Stack from '../stack/stack';

export default class StaQueue implements Queue {
  protected stack1: Stack;

  protected stack2: Stack;

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  empty(): boolean {
    return this.stack1.empty();
  }

  peek(): string {
    return this.stack1.peek();
  }

  add(value: string): void {
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

  remove(): string {
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
