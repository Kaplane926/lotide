const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){

    return false

  }
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false
    }
  }
  return true
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

};

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

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [3, 7, 4]))