const eqArrays = require("./eqArrays")

const assertArraysEqual = require("./assertArraysEqual")

const without = function(source, itemsToRemove){
  let newArray = []
  for(let i = 0; i < source.length; i++){
    newArray.push(source[i])
    for(let x = 0; x < itemsToRemove.length; x++){
      if(source[i] === itemsToRemove[x]){
        newArray.pop()
      }
    }
  }
  return newArray
}

module.exports = without

/*console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [3, 7, 4]))*/