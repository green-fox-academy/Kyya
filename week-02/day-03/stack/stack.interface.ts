export interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}
