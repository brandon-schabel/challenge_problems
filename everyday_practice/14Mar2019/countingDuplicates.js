// https://www.codewars.com/kata/counting-duplicates/train/javascript
function duplicateCount(text){
  //...
  let charCount = {}
  let doubleOcc = 0
  text.toLowerCase().split('').forEach(char => {
    charCount[char] ? charCount[char] += 1 : charCount[char] = 1
  })
  
  for(key in charCount) {
    if(charCount[key] > 1) {
      doubleOcc++
    }
  }
  
  return doubleOcc
}