/**
 * Write a function that takes an object which has numbers on it's values.
 * It represents the result of a word count on a text.
 * The function should return the word with the highest count.
 */

/* eslint-disable */

// before ES8
function getHighestWord(countOfWords) {
  let maxCount = 0;
  let maxCountWord = null;

  for (let key of Object.keys(countOfWords)) {
    if (countOfWords[key] > maxCount) {
      maxCount = countOfWords[key];
      maxCountWord = key;
    }
  }
  return maxCountWord;
}

// ES8
function getHighestWordES6(countOfWords) {
  let maxCount = 0;
  let maxCountWord = null;
  
  for (const [ key, value ] of Object.entries(countOfWords)) {
    if (value > maxCount) {
      maxCount = value;
      maxCountWord = key;
    }
  }
  return maxCountWord;
}

var countOfWords = {
  'the': 10,
  'is': 7,
  'my': 6,
}

console.log(getHighestWord(countOfWords));
console.log(getHighestWordES6(countOfWords));
