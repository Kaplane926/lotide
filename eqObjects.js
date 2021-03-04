const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let object1Size = 0
  let object2Size = 0
  for (key in object1){
    if(object1[key] !== object2[key]){
      return false
    }
    object1Size ++
  }
  for (key in object2){
    object2Size++
  }
  if(object1Size !== object2Size){
    return false
  }else{
    return true
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

console.log((eqObjects(ab, ba)))

