const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map([1, 2, 3], word => word[0]), [1]);
assertArraysEqual(map([1, 2, 3], word => word[0]), [3]);
assertArraysEqual(map(["1", "2", "3"], word => word[0]), ["1", "2", "3"]);
assertArraysEqual(map(["1", "2", "3"], word => word[0]), ["1", "2", 3]);
assertArraysEqual(map(["I", "want", "to", "eat"], word => word[0]), ['I', 'w', 't', 'e']);