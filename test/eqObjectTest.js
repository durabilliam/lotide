const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#head", () => {

  it("returns true as object ab = ba", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("returns false as object ab !== abc", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("returns true as we compare same arrays within objects", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("returns false as we compare arrays with different lengths", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

});
