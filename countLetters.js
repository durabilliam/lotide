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

const countLetters = function (inputString){
  const obCountOut = {};
  let inputStringNoSpaces = inputString.replace(/ /g, "");
  console.log(inputStringNoSpaces)
  ////read the string and tally each occurance
  ///output is an object
  for (let i = 0; i < inputStringNoSpaces.length; i++){
    let count = 0;
    for (let j =0; j < inputStringNoSpaces.length; j++){
      if (inputStringNoSpaces[i] === inputStringNoSpaces[j]){
        count++
        obCountOut[inputStringNoSpaces[i]] = count;
      }
    }
  } return obCountOut;
};

console.log(countLetters("the the the the man is grumpy"))
console.log(countLetters("This IS A fun Time to Cry and Poop"))