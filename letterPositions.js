const letterPositions = function(sentence) {
  const results = {};
  let x = 0
    for(letter of sentence){
      if(letter !== " "){
        if(results[letter]){
          results[letter].push(x)
        }else{
          results[letter] = [x]
        }
        x++
      }
    }
  return results;
};

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

console.log(letterPositions("hello"))
console.log(assertArraysEqual(letterPositions("hello")["l"], [2,3]))