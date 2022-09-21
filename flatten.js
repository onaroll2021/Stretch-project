const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
const assertArraysEqual = function(testOne, testTwo) {
  if (eqArrays(testOne, testTwo) === true) {
    console.log(`👏 Yeah! Two Arrays are exactly the same!`);
  } else {
    console.log(`🥴 Two arrays are not the same!`);
  }
};
// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
// Array.isArray() if value true, is array, otherwise false, not an array

const flatten = function(arrayConvert) {
  let arrayNew = [];
  for (let i = 0; i < arrayConvert.length; i++) {
    if (Array.isArray(arrayConvert[i]) === true) {
      for (let u = 0; u < arrayConvert[i].length; u++) {
        arrayNew.push(arrayConvert[i][u]);
      }
    } else {
      arrayNew.push(arrayConvert[i]);
    }
  }
  return arrayNew;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));

