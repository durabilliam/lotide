const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {

  it("returns middle value in an array of numbers[1, 2, 3, 4, 5]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  });

  it("returns empty array if input is 2 elements or less[1, 2]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []));
  });

  it("returns middle two elements if input has even number of elements['one', 'two', 'three', 'four', 'five', 'six'] ", () => {
    assert.strictEqual(assertArraysEqual(middle(['one', 'two', 'three', 'four', 'five', 'six']), ['three', 'four']));
  });
})
