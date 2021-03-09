const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;

describe("#middle", ()=>{
  it('returns [3,4] when given [1,2,3,4,5,6]', ()=>{
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4])
  });
  it('returns [3] when given [1,2,3,4,5]', ()=>{
    assert.deepEqual(middle([1,2,3,4,5]), [3])
  });
  it('returns [] when given [1]', ()=>{
    assert.deepEqual(middle([1]), [])
  });
  it('returns [] when given [1,2]', ()=>{
    assert.deepEqual(middle([1,2]), [])
  });
});


