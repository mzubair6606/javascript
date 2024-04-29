// Problem 6: Array Chunking:
// Write a function that takes an array and a chunk size as input and splits the array into subarrays of the specified size.

// Example:
// chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// Output: [[1, 2, 3], [4, 5, 6], [7]]

// chunkArray(['a', 'b', 'c', 'd', 'e'], 2);
// Output: [['a', 'b'], ['c', 'd'], ['e']]

function chunkArray(array, chunkSize) {
  let chunkArray = [];
  let length = array.length;
  let requiredNoChunks = Math.ceil(length / chunkSize);

  let formula = (chunkNumber) => {
    //
    let chunkEnd = chunkNumber * chunkSize;
    let startIndex = chunkEnd - chunkSize;

    return [startIndex, chunkEnd];
  };

  for (i = 1; i <= requiredNoChunks; i++) {
    let index = formula(i);

    chunkArray.push(array.slice(index[0], index[1]));
  }

  return chunkArray;
}

// console.log("chunkArray => ", chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// Problem 7: Array Sorting:
// Write a function that takes an array of numbers as input and returns a new array with the numbers sorted in ascending order.

// Example:
// sortArray([3, 1, 5, 2, 4]);
// Output: [1, 2, 3, 4, 5]

// sortArray([-5, 10, -3, 8, 0]);
// Output: [-5, -3, 0, 8, 10]

function calculateMin(newArray) {
  let number = Infinity;
  let index = 0;
  for (j = 0; j < newArray.length; j++) {
    let a = newArray[j];
    if (a < number) {
      number = a;
      index = j;
    }
  }
  return { number, index };
}
function sortArray(arrayToSort) {
  //array sorting of number in ascending order
  let sortedArray = [];
  let clonedArray = [...arrayToSort];
  for (i = 0; i < clonedArray.length; i++) {
    let number = calculateMin(arrayToSort);
    arrayToSort.splice(number.index, 1);
    sortedArray.push(number.number);
  }

  return sortedArray;
}

console.log("sortArray => ", sortArray([3, 1, 5, 2, 4]));

// Problem 8: Array Flattening:
// Write a function that takes a nested array as input and returns a flattened version of the array.

// Example:
// flattenArray([1, [2, 3], [4, [5, 6]], 7]);
// Output: [1, 2, 3, 4, 5, 6, 7]

// flattenArray(['a', ['b', 'c'], 'd', ['e', ['f', 'g']]]);
// Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
