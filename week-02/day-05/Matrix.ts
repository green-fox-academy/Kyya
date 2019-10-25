import { IMatrix } from './Interfaces';

class Matrix<T> implements IMatrix<T> {
  rows: number;
  columns: number;
  values: T[][] = [];

  constructor(rows: number, columns: number, initialValue: T = null) {
    this.rows = rows;
    this.columns = columns;
    for (let i = 0; i < rows; i++) {
      this.values[i] = [];
      for (let j = 0; j < columns; j++) {
        this.values[i][j] = initialValue;
      }
    }
  }

  empty(): boolean {
    return true;
  }
}

export { Matrix };
