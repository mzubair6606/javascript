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
  const length = array.length -1;
  const rotation = [...array];

  function indexFormula(index) {


    let a = index;

    if(length > )
    //
  }
}
