export interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}
