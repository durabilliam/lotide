const countLetters = function(inputString) {
  const obCountOut = {};
  let inputStringNoSpaces = inputString.replace(/ /g, "");
  for (let i = 0; i < inputStringNoSpaces.length; i++) {
    let count = 0;
    for (let j = 0; j < inputStringNoSpaces.length; j++) {
      if (inputStringNoSpaces[i] === inputStringNoSpaces[j]) {
        count++;
        obCountOut[inputStringNoSpaces[i]] = count;
      }
    }
  } return obCountOut;
};

module.exports = countLetters;

console.log(countLetters("the the the the man is grumpy"));

