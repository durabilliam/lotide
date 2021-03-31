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
  if (arrayOne.length !== arrayTwo.length){
    return false
  }
  for (let i =0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false
    } 
  } return true;
  /*
  let out = [];
  
  if (typeof arrayOne === 'undefined' && typeof arrayTwo === 'undefined'){
    out.push("true");
  } else { 
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i] && (typeof(arrayOne[i]) === "string" || typeof(arrayTwo[i]) === "string")) {
      out.push("true");
    } else if (arrayOne[i] === arrayTwo[i] && (typeof(arrayOne[i]) === "number" || typeof(arrayTwo[i]) === "number")) {
      out.push("true");
    } else out.push("false");
    if (out.includes("false")) {
      return false;
    } else return true;
  }
}*/
};

const assertArraysEqual = function(arraysOne, arraysTwo){
  if (eqArrays(arraysOne, arraysTwo) === true){
    console.log(`\uD83D\uDC7D Assertion Passed: ${arraysOne} === ${arraysTwo}`);
  } else console.log(`\uD83E\uDD2E Assertion Failed: ${arraysOne} !== ${arraysTwo}`);
}

const middle = function(array){
  let arraymiddle = [];
  if (array.length === 2 || array.length ===1){
    return arraymiddle;
  }  
  let mid = 0
  if ((array.length % 2) === 0){
    console.log(array.length)
    mid = ((array.length) / 2)
    console.log(mid);
    arraymiddle.push(array[mid-1]);
    arraymiddle.push(array[mid]);
    return arraymiddle
  } else if ((array.length % 2) !== 0){
    console.log(array.length)
    mid = (Math.floor((array.length) / 2));
    console.log(mid)
    arraymiddle.push(array[mid]);
    return arraymiddle
  }
  
  
  //  determine if length is odd or even or < 2. 
  
  // if < 2 need to return empty
  
  // if odd need to return middle
  
  // if even need to return middle 2

};

console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle([1, 2]));
assertArraysEqual(middle([1, 2]), []);

console.log(middle(["one", "two", "three", "four", "five", "six"]));
assertArraysEqual(middle(["one", "two", "three", "four", "five", "six"]), ["three", "four"]);