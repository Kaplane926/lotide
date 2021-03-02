const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

};

const tail = function(someOtherArray) {
  let someNewArray = someOtherArray.slice(1);
  return someNewArray;
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, 2));
console.log(assertEqual("Hi", "Hi"));

console.log(tail([1,2,34,5,6,67]));
console.log(tail([1]));
console.log(tail([]));