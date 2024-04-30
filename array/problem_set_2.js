// Problem 1: Matrix Transposition
// Write a function that takes a two-dimensional array (matrix) as input and returns its transpose.

// Example:
// transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

function transposeMatrixFunc(matrix) {
  //
  let transposeMatrixArray = [];

  for (i = 0; i < matrix.length; i++) {
    //
    let array = matrix[i];

    for (j = 0; j < array.length; j++) {
      let element = array[j];

      if (transposeMatrixArray[j]) {
        transposeMatrixArray[j].push(element);
      } else {
        transposeMatrixArray.push([element]);
      }
    }
  }

  return transposeMatrixArray;
}

// console.log(
//   "transposeMatrix => ",
//   transposeMatrixFunc([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// Problem 2: Array Frequency Counting
// Write a function that takes an array of elements as input and returns an object containing the frequency count of each unique element in the array.

// Example:
// countFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

function countFrequencyFunc(array) {
  let occurrence = {};

  for (i = 0; i < array.length; i++) {
    let element = array[i];
    let frequency = 0;

    let isDuplicate = occurrence[`${element}`];

    if (isDuplicate) {
      continue;
    }

    for (j = 0; j < array.length; j++) {
      if (array[j] === element) {
        frequency += 1;
      }
    }

    occurrence[`${element}`] = frequency;
  }

  return occurrence;
}

console.log(
  "countFrequencyFunc => ",
  countFrequencyFunc([
    1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  ])
);

// Problem 3: Array Partitioning
// Write a function that takes an array and a partition size as input and partitions the array into subarrays of the specified size. The last partition may contain fewer elements than the specified size.

// Example:
// partitionArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
