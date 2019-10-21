import { Printable } from './Printable';

export default class Todo implements Printable {
  protected completed: boolean;

  protected text: string;

  constructor(text = 'Something', completed = false) {
    this.text = text;
    this.completed = completed;
  }

  printAllFields(): void {
    console.log(` - [${this.completed ? 'x' : ' '}] ${this.text}`);
  }
}
