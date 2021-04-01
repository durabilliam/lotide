const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arraysOne, arraysTwo) {
  if (eqArrays(arraysOne, arraysTwo) === true) {
    console.log(`\uD83D\uDC7D Assertion Passed: ${arraysOne} === ${arraysTwo}`);
  } else console.log(`\uD83E\uDD2E Assertion Failed: ${arraysOne} !== ${arraysTwo}`);
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map([1, 2, 3], word => word[0]), [1]);
assertArraysEqual(map([1, 2, 3], word => word[0]), [3]);
assertArraysEqual(map(["1", "2", "3"], word => word[0]), ["1", "2", "3"]);
assertArraysEqual(map(["1", "2", "3"], word => word[0]), ["1", "2", 3]);
assertArraysEqual(map(["I", "want", "to", "eat"], word => word[0]), ['I', 'w', 't', 'e']);