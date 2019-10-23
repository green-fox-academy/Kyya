export interface Tree<T> {
  empty(): boolean;
  add(value: T): void;
  remove(value: T): void;
  search(value: T): boolean;
}
