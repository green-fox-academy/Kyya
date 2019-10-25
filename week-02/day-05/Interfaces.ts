export interface IMatrix<T> {
  rows: number;
  columns: number;
  values: T[][];
  empty(): boolean;
}

export interface ISudoku {
  check(i: number, j: number, value: number): boolean;
  execute(i?: number, j?: number): boolean;
}
