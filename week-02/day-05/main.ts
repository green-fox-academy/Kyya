import Sudoku from './Sudoku';
import { readFile, parseMatrixInput } from './MatrixReader';

const input = parseMatrixInput(readFile('./data/matrix-input.txt'));

const sudoku = Sudoku.from(input);

console.time('\n▶ Finished The Sudoku Problem:');
console.log('\n▶ The Sudoku Problem:');
console.log(sudoku.dump());
sudoku.execute();
console.log('\n▶ The Sudoku Solution.');
console.log(sudoku.dump());
console.timeEnd('\n▶ Finished The Sudoku Problem:');
