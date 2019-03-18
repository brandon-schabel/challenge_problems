// https://www.codewars.com/kata/isograms/train/javascript

function isIsogram(str){
  //...
  let charObj = {
  
  }
  
  str.toLowerCase().split('').forEach(char => {
    if (charObj[char]) {
      return false
    } else {
      charObj[char] = 1
    }
  })
  
  return true
}