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



const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }

  return results;

}


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);


