const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", ()=>{
  it('returns "🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp" when given "Lighthouse Labs", "Bootcamp"', ()=>{
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), "🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp")
  });
  it('returns "🛑🛑🛑 Assertion Failed: 1 !== 2" when given (1,2)', ()=>{
    assert.strictEqual(assertEqual(1, 2), "🛑🛑🛑 Assertion Failed: 1 !== 2")
  });
  it('returns "✅✅✅ Assertion Passed: 1 === 1" when given (1,1)', ()=>{
    assert.strictEqual(assertEqual(1, 1), "✅✅✅ Assertion Passed: 1 === 1")
  });
  it('returns "✅✅✅ Assertion Passed: hi === hi" when given ("hi", "hi")', ()=>{
    assert.strictEqual(assertEqual("hi", "hi"), "✅✅✅ Assertion Passed: hi === hi")
  });
})

