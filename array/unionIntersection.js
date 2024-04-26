function union(params) {
  const { array1, array2 } = params;

  const unionArray = [...array1, ...array2];
  const uniqueArray = [];

  //   console.log("union array => ", unionArray, unionArray.length);

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
      unionArray.push(a);
    }
  }

  return unionArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 2, 6, 6, 7];

console.log("union array => ", union({ array1, array2 }));
