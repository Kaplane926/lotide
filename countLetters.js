const assertEqual = require("./assertEqual")

const countLetters = function(sentence){
  letterCount = {}
  for(letter of sentence){
      if(letter !== ' '){
      if(letterCount[letter]){
        letterCount[letter] += 1
      }else{ letterCount[letter] = 1

      }
    }

    }
  
  return letterCount
}

module.exports = countLetters

//console.log(countLetters("Here is a sentence"))