const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')


const middle = function(array) {
  midArray = []

 for (let i = 0; i < array.length; i++){
  if(array.length %2 === 0){
    if((i === array.length/2 || i === (array.length/2) +1) && array.length > 2){
      midArray.push(array[i -1])

    }
  }else{
    if(i === (array.length/2) +.5 && array.length > 2){
      midArray.push(array[i-1])
    }
  }

 }
 return midArray
}

module.exports = middle

