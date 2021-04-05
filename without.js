const without = function(source, itemsToRemove){
  const output = [];
  for (let i = 0; i < source.length; i++) {
      if (!itemsToRemove.includes(source[i])){
        output.push(source[i])
      }
  }return output
};

module.exports = without;


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3, 4, 4], [1, 4]))
