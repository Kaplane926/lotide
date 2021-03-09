const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#eqArrays", ()=>{
it("returns true when given ([1, 2, 3], [1, 2, 3])", ()=>{
assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]))
})
it("returns false when given ([1, 2, 3,4], [1, 2, 3])", ()=>{
  assert.isFalse(eqArrays([1, 2, 3,4], [1, 2, 3]))
})
it("returns false when given ([5, 2, 3,], [1, 2, 3])", ()=>{
  assert.isFalse(eqArrays([5, 2, 3], [1, 2, 3]))
})
it('returns false when given (["boolean", "joolean", "mcfoolean"], ["hi", "bye", "why"])', ()=>{
  assert.isFalse(eqArrays(["boolean", "joolean", "mcfoolean"], ["hi", "bye", "why"]))
})
it('returns true when given (["boolean", "joolean", "mcfoolean"], ["boolean", "joolean", "mcfoolean"])', ()=>{
  assert.isTrue(eqArrays(["boolean", "joolean", "mcfoolean"], ["boolean", "joolean", "mcfoolean"]))
  })
  it('returns true when given (["2", 3], ["2", 3])', ()=>{
    assert.isTrue(eqArrays(["2", 3], ["2", 3]))
    })
});

