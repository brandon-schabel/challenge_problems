
const validAnagram = (word, word2) => {
  let wordObj = {}
  let word2Obj = {}

  if(word.length !== word2.length) {
    return false;
  }

  for(let char of word.split('')) {
    wordObj[char] = (wordObj[char] || 0) + 1
  }

  for(let char of word2.split('')) {
    word2Obj[char] = (word2Obj[char] || 0) + 1
  }

  for(let key in wordObj) {
    if(!(key in word2Obj)) return false;
  }

  for(let key in wordObj) {
    if(wordObj[key] !== word2Obj[key] ) return false;
  }

  return true
}


console.log(validAnagram('anagram', 'nagaram'))


console.log(validAnagram('anagram', 'nagajram'))
console.log(validAnagram('car', 'rat'));