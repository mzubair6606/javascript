function union(params) {
  const { array1, array2 } = params;

  const unionArray = [...array1, ...array2];
  const uniqueArray = [];

  for (i = 0; i < unionArray.length; i++) {
    let a = unionArray[i];

    let isDuplicate = false;

    for (j = 0; j < uniqueArray.length; j++) {
      let b = uniqueArray[j];
      if (a === b) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(a);
    }
  }

  return uniqueArray;
}

function intersection(params) {
  const { array1, array2 } = params;
  const unionArray = [...array1, ...array2];
  const intersection = [];

  for (i = 0; i < unionArray.length; i++) {
    let a = unionArray[i];

    let existsInArray1 = false;
    let existsInArray2 = false;
    let duplicate = false;

    for (j = 0; j < array1.length; j++) {
      if (a === array1[j]) {
        existsInArray1 = true;
        break;
      }
    }
    for (k = 0; k < array2.length; k++) {
      if (a === array2[k]) {
        existsInArray2 = true;
        break;
      }
    }
    for (m = 0; m < intersection.length; m++) {
      if (a === intersection[k]) {
        duplicate = true;
        break;
      }
    }

    if (existsInArray1 && existsInArray2 && !duplicate) {
      intersection.push(a);
    }
  }

  return intersection;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 2, 6, 6, 7];

// console.log("union array => ", union({ array1, array2 }));
console.log("intersection array => ", intersection({ array1, array2 }));
