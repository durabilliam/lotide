const findKey = function(object, callback) {
  for (let keys in object) {
    const star = object[keys];
    if (callback(star)) {
      return keys;
    }
  }
  return undefined;
};

module.exports = findKey;

const objectList = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log("hgdjge", findKey(objectList, x => x.stars === 2));