const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

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


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([5, 2, 3], [1, 2, 3]), false));
console.log(assertEqual(eqArrays(["boolean", "joolean", "mcfoolean"], ["hi", "bye", "why"]), false));
console.log(assertEqual(eqArrays(["boolean", "joolean", "mcfoolean"], ["boolean", "joolean", "mcfoolean"]), true));