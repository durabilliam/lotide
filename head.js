const head = function(input) {
  if (typeof(input) === "object") {
    return input[0];
  } else return input;
};

module.exports = head;