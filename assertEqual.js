const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

};

// TEST CODE


module.exports = assertEqual;
