const assert = require('chai').assert;
const tail = require('../tail');

describe("#head", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns the orginal array length untouched for ['Hello', 'Lighthouse', 'Labs']", () => {
    let input = ['Hello', 'Lighthouse', 'Labs'];
    let result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.lengthOf(input, 3);
  });

  it("returns the output array with a new length ['Hello', 'Lighthouse', 'Labs'] of 2" , () => {
    let input = ['Hello', 'Lighthouse', 'Labs'];
    let result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.lengthOf(result, 2);
  });
});

