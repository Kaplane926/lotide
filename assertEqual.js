const assertEqual = function(actual, expected){
  if(actual !== expected){
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  }
    else{
      return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    }

}

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, 2));
console.log(assertEqual("Hi", "Hi"));