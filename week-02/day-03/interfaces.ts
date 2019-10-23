export interface INode<T> {
  data: T;
  next: INode<T>;
}

export interface IQueue<T> {
  empty(): boolean;
  peek(): T;
  add(value: T): void;
  remove(): T;
}

export interface ILinkedList<T> {
  add(value: T, index?: number): void;
  get(index: number): T;
  removeItem(value: T): void;
  remove(index: number): T;
  size(): number;
}

export interface IStack<T> {
  empty(): boolean;
  peek(): T;
  push(value: T): void;
  pop(): T;
}

export interface ITree<T> {
  empty(): boolean;
  add(value: T): void;
  remove(value: T): void;
  search(value: T): boolean;
}

export interface IBinaryNode<T> {
  data: T;
  left: IBinaryNode<T>;
  right: IBinaryNode<T>;
}
