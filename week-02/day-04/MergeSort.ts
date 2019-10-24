// Merge the two arrays: left and right
function merge(left: Array<number>, right: Array<number>): Array<number> {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }
  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

export default function MergeSort(array: Array<number>): Array<number> {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(
    MergeSort(left),
    MergeSort(right),
  );
}

const sortedArray = MergeSort([1, 6, 4, 2, 7, 2, 8, 4, 3]);
console.log(sortedArray);
