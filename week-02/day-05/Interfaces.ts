export interface IMatrix<T> {
  rows: number;
  columns: number;
  values: T[][];
  empty(): boolean;
}
