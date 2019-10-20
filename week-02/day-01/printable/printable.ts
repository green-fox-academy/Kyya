interface IPrintable {
    printAllFields(): void;
}

class Domino implements IPrintable {
    protected values: number[];
    constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
    }
    printAllFields(): void {
        console.log(`[${this.values[0]}|${this.values[1]}]`);
    }
}

class Todo implements IPrintable {
    protected completed: boolean;
    protected text: string;
    constructor(text: string = "Something", completed: boolean = false) {
        this.text = text;
        this.completed = completed;
    }
    printAllFields(): void {
        console.log(` - [${this.completed?'x':' '}] ${this.text}`);
    }
}

export { 
    Domino,
    Todo
}
