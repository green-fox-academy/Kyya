import { readFileSync } from 'fs';

export function readFile(filename: string): string {
  try {
    const fileContent = readFileSync(filename, 'UTF-8');
    return fileContent;
  } catch (err) {
    console.log(`cannot read file: ${err.message}`);
    return '';
  }
}

export function parseMatrixInput(rawMatrixDescriptor: string): number[][] {
  return rawMatrixDescriptor
    .split('\n')
    .map(line => line.split(' ')
    .map(value => parseInt(value) ? parseInt(value) : 0));// eslint-disable-line
}
