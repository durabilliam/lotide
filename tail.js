const tail = function(input) {
  let output = [];
  for (let i = 0; i < (input.length - 1); i++) {
    output[i] = input[i + 1];
  }
  return output;
};

module.exports = tail;
