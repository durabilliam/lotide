const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arraysOne, arraysTwo) {
  if (eqArrays(arraysOne, arraysTwo) === true) {
    console.log(`\uD83D\uDC7D Assertion Passed: ${arraysOne} === ${arraysTwo}`);
  } else console.log(`\uD83E\uDD2E Assertion Failed: ${arraysOne} !== ${arraysTwo}`);
};

module.exports = assertArraysEqual;

