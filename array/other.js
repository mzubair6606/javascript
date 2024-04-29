// Problem 4: Array Average:
// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

// Example:
// arrayAverage([1, 2, 3, 4, 5]);
// Output: 3

// arrayAverage([-1, 5, 10, -20]);
// Output: -1.5

function arrayAverage(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

// console.log("average => ", arrayAverage([1, 2, 3, 4, 5]));

// Problem 5: Array Rotation:
// Write a function that takes an array and a number (n) as input and rotates the elements of the array to the right n times.

// Example:
// rotateArray([1, 2, 3, 4, 5], 2);
// Output: [4, 5, 1, 2, 3]

// rotateArray(['a', 'b', 'c', 'd', 'e'], 3);
// Output: ['c', 'd', 'e', 'a', 'b']

function rotateArray(array, number) {
  const length = array.length;
  const rotation = [...array];

  for (i = 0; i < rotation.length; i++) {
    let positionInArray = indexFormula(i);

    console.log({ positionInArray, i });

    rotation.splice(positionInArray, 1, array[i]);
  }

  return rotation;

  function indexFormula(index) {
    let requestedIndex = number + index;
    let indexOfLastElement = length - 1;

    let subIndex = indexOfLastElement - requestedIndex;

    if (subIndex === 0 || subIndex > 0) {
      return requestedIndex;
    } else if (subIndex < 0) {
      return requestedIndex - indexOfLastElement - 1;
    }
    //
  }
}

console.log("rotateArray => ", rotateArray(["a", "b", "c", "d", "e"], 3));
