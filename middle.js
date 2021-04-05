const middle = function(array) {
  let arraymiddle = [];
  if (array.length === 2 || array.length === 1) {
    return arraymiddle;
  }
  let mid = 0;
  if ((array.length % 2) === 0) {
    mid = ((array.length) / 2);
    arraymiddle.push(array[mid - 1]);
    arraymiddle.push(array[mid]);
    return arraymiddle;
  } else if ((array.length % 2) !== 0) {
    mid = (Math.floor((array.length) / 2));
    arraymiddle.push(array[mid]);
    return arraymiddle;
  }
};

module.exports = middle;
