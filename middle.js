const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){

    return false

  }
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false
    }
  }
  return true
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

};

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

const someArr = [1,2,3,4,5,6]
const someOtherArr = [1,2,3,4,5]

console.log(middle(someArr))
console.log(middle(someOtherArr))
console.log(middle([1]))
console.log(middle([1,2]))

console.log(assertArraysEqual(middle(someArr), [3,4]))
console.log(assertArraysEqual(middle(someOtherArr), [3]))