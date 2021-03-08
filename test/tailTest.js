const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail')

console.log(assertArraysEqual(tail([1,2,34,5,6,67]), [2,34,5,6,67]));
console.log(assertArraysEqual(tail([1]), []));
console.log(assertArraysEqual(tail([]), []));
console.log(assertArraysEqual(1,1))
console.log(assertArraysEqual(tail(["Hello", "what", "is", "the", "issue?"]), ["what", "is", "the", "issue?"]))