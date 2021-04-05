const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle([1, 2]));
assertArraysEqual(middle([1, 2]), []);

console.log(middle(["one", "two", "three", "four", "five", "six"]));
assertArraysEqual(middle(["one", "two", "three", "four", "five", "six"]), ["three", "four"]);
