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
  let out = [];
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i] && (typeof(arrayOne[i]) === "string" || typeof(arrayTwo[i]) === "string")) {
      out.push("true");
    } else if (arrayOne[i] === arrayTwo[i] && (typeof(arrayOne[i]) === "number" || typeof(arrayTwo[i]) === "number")) {
      out.push("true");
    } else out.push("false");
  }
  if (out.includes("false")) {
    return false;
  } else return true;
};

const assertArraysEqual = function(arraysOne, arraysTwo){
  if (eqArrays(arraysOne, arraysTwo) === true){
    console.log(`\uD83D\uDC7D Assertion Passed: ${arraysOne} === ${arraysTwo}`);
  } else console.log(`\uD83E\uDD2E Assertion Failed: ${arraysOne} !== ${arraysTwo}`);
}

const without = function(source, itemsToRemove){
 /*
  let filteredArray = [];
  let gone =[];
  for (let x =0; x < source.length; x++){
    filteredArray[x] = source[x]  
  }
  */
  const output = [];
  for (let i = 0; i < source.length; i++) {
    
      if (!itemsToRemove.includes(source[i])){
        output.push(source[i])
        
        //filteredArray.push(source[i]);
      }
    
  }return output
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3, 4, 4], [1, 4]))


//assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual([1, 2, 3], [3, 2, 1]);
//assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
//assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
