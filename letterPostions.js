const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  let inputStringNoSpaces = sentence.replace(/ /g, "");
  for (let j = 0; j < inputStringNoSpaces.length; j++) {
    if (!results[inputStringNoSpaces[j]]) {
      results[inputStringNoSpaces[j]] = [j];
    } else {
      results[inputStringNoSpaces[j]].push(j);
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("the the the the man is grumpy"));
console.log(letterPositions("This IS A fun Time to Cry and Poop"));
assertArraysEqual(letterPositions("hello").e, [1]);
