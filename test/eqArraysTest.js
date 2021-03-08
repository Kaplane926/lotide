const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([5, 2, 3], [1, 2, 3]), false));
console.log(assertEqual(eqArrays(["boolean", "joolean", "mcfoolean"], ["hi", "bye", "why"]), false));
console.log(assertEqual(eqArrays(["boolean", "joolean", "mcfoolean"], ["boolean", "joolean", "mcfoolean"]), true));
console.log(eqArrays(["2", 3], ["2", 3]))