export default function BubbleSort(array: Array<number>, ascending = true): void {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (ascending ? array[j] > array[j + 1] : array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

const array = [1, 6, 4, 2, 7, 2, 8, 4, 3];
BubbleSort(array);
console.log(array);
