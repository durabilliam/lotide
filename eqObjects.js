const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keys1 = Object.keys(object1);
  for (let key of keys1) {
    if (Array.isArray(object1[key]) === true) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

module.exports = eqObjects;