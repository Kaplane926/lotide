const assertArraysEqual = require('../assertArraysEqual')
const head = require('../head')
const assert = require('chai').assert;

describe("assertArraysEqual", ()=>{
it("returns '✅✅✅ Assertion Passed: 1,2,3 === 1,2,3', for ([1,2,3], [1,2,3])", ()=>{
  assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]), ("✅✅✅ Assertion Passed: 1,2,3 === 1,2,3"))
})
it("returns '🛑🛑🛑 Assertion Failed: 1,2,4 !== 1,2,3' for ([1,2,4], [1,2,3])", ()=>{
  assert.strictEqual(assertArraysEqual([1,2,4], [1,2,3]), "🛑🛑🛑 Assertion Failed: 1,2,4 !== 1,2,3")
})
});


