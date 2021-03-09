const assertEqual = require("./assertEqual")

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

module.exports = eqObjects



/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(assertEqual(eqObjects(ab, abc), false)); // => false

//console.log((eqObjects(ab, ba)))
//console.log(Object.keys(ab).length)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

console.log(Object.keys(cd2).length)
console.log(eqArrays(cd["d"], dc["d"]))*/