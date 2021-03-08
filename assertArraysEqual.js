const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

};

module.exports = assertArraysEqual

console.log(assertArraysEqual([1,2,4], [1,2,3]))
console.log(assertArraysEqual([1,2,3], [1,2,3]))
console.log(assertArraysEqual([1,2, "cow"], [1,2,3]))