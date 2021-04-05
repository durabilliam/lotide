const assertEqual = require('./assertEqual');

const findKeyByValue = function(genres, shows) {
  const keys = Object.keys(genres);
  for (let key of keys) {
    if (genres[(key)] === shows) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
