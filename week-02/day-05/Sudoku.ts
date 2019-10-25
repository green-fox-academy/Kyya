import { Matrix } from './Matrix';

class Sudoku extends Matrix<number> {
  static MAX_COUNT = 1;

  protected counter = 0;
  constructor(linesOfNumber: number[][]) {
    super(9, 9);
    this.initialize(linesOfNumber);
  }

  initialize(linesOfNumber: number[][]): void {
    this.values = [...linesOfNumber];
  }

  // check whether position (i, j) can be value
  check(i: number, j: number, value: number): boolean {
    for (let index = 0; index < 9; index++) {
      if (this.values[i][index] === value) {
        return false;
      }
      if (this.values[index][j] === value) {
        return false;
      }
      const targetRow = Math.floor(i / 3) * 3 + Math.floor(index / 3);
      const targetColumn = Math.floor(j / 3) * 3 + (index % 3);
      if (this.values[targetRow][targetColumn] === value) {
        return false;
      }
    }
    return true;
  }

  static from(input: number[][]): Sudoku {
    return new Sudoku(input);
  }

  dump(): number[][] {
    return this.values;
  }

  execute(i = 0, j = 0): boolean {
    // Find blank ceil position
    outer:
    for (let x = i; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        if (this.values[x][y] === 0) {
          i = x;
          j = y;
          break outer;
        }
      }
    }
    // All ceils are not blank.
    if (this.values[i][j] !== 0) {
      this.counter++;
      this.dump();
      return this.counter === Sudoku.MAX_COUNT;
    }
    // try to fill number
    for (let k = 1; k <= 9; k++) {
      if (!this.check(i, j, k)) {
        continue;
      }
      this.values[i][j] = k;
      if (i === 8 && j === 8) {
        this.counter++;
        this.dump();
        return this.counter === Sudoku.MAX_COUNT;
      }
      // calculate next ceil position
      const nextRow = (j < 9 - 1) ? i : i + 1;
      const nextCol = (j < 9 - 1) ? j + 1 : 0;
      if (this.execute(nextRow, nextCol)) {
        return true;
      }
      // try next k number
      this.values[i][j] = 0;
    }
    return false;
  }
}

export default Sudoku;
