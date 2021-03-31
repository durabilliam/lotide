const assertEqual = function(actual, expected) {
  if (actual === expected && (typeof(actual) === "string" || typeof(expected) === "string")) {
    console.log(`\uD83D\uDC7D Assertion Passed: \"${actual}\" === \"${expected}\"`);
  } else if (actual !== expected && (typeof(actual) === "string" || typeof(expected) === "string")) {
    console.log(`\uD83E\uDD2E Assertion Failed: \"${actual}\" !== \"${expected}\"`);
  } else if (actual === expected && (typeof(actual) === "number" || typeof(expected) === "number")) {
    console.log(`\uD83D\uDC7D Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected && (typeof(actual) === "number" || typeof(expected) === "number")) {
    console.log(`\uD83E\uDD2E Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected && (typeof(actual) === "bolean" || typeof(expected) === "boolean")) {
    console.log(`\uD83D\uDC7D Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected && (typeof(actual) === "bolean" || typeof(expected) === "boolean")) {
    console.log(`\uD83E\uDD2E Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));
(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true));
