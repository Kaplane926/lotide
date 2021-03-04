const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

};

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

console.log(countLetters("Here is a sentence"))