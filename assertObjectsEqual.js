const eqArrays = require("./eqArrays")

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false
  }
  for (key in object1){
    
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if((eqArrays(object1[key], object2[key])) === false){
        return false
      }
      
    }else if
    (object1[key] !== object2[key]){
      return false
    }
  }
  return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } else {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  }
};

module.exports = assertObjectsEqual

const dominion = {durations: "orange",
vicoryPoints: [3,5,6,10],
players: [2,3,4,5,6],
bestplayer: "kaplane"
}

const hominion = {durations: "orange",
vicoryPoints: [3,5,6,10],
players: [2,3,4,5,6],
bestplayer: "kaplane"
}

const idgaf = {
  someKey: "some value"
}

console.log(assertObjectsEqual(hominion, dominion))
console.log(assertObjectsEqual(idgaf, dominion))