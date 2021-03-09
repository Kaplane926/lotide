const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", ()=>{
it("returns [2,34,5,6,67] when given [1,2,34,5,6,67]", ()=>{
  assert.deepEqual(tail([1,2,34,5,6,67]), [2,34,5,6,67])
});
it("returns [] when given [1]", ()=>{
  assert.deepEqual(tail([1]), [])
});
it('returns ["what", "is", "the", "issue?"] when given ("Hello", "what", "is", "the", "issue?")', ()=>{
  assert.deepEqual(tail(["Hello", "what", "is", "the", "issue?"]), ["what", "is", "the", "issue?"])
});
});

