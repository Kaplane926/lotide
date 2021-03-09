const eqArrays = require("./eqArrays")

const assertArraysEqual = require("./assertArraysEqual")

const letterPositions = function(sentence) {
  const results = {};
  let x = 0
    for(letter of sentence){
      if(letter !== " "){
        if(results[letter]){
          results[letter].push(x)
        }else{
          results[letter] = [x]
        }
        x++
      }
    }
  return results;
};

module.exports = letterPositions

//console.log(letterPositions("hello"))
//console.log(assertArraysEqual(letterPositions("hello")["l"], [2,3]))