const assertEqual = require("./assertEqual")

const findKeyByValue = function(object, value){
  for(key in object){
    if(object[key] === value){
      return key
    }
  }
}

module.exports = findKeyByValue

/*const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"));*/