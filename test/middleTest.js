const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')


const someArr = [1,2,3,4,5,6]
const someOtherArr = [1,2,3,4,5]

console.log(middle(someArr))
console.log(middle(someOtherArr))
console.log(middle([1]))
console.log(middle([1,2]))

console.log(assertArraysEqual(middle(someArr), [3,4]))
console.log(assertArraysEqual(middle(someOtherArr), [3]))