// https://www.codewars.com/kata/string-ends-with/train/javascript

function solution(str, ending){
  // TODO: complete
  //
  const endLen = ending.length
  const strLen = str.length
  if(str.slice(strLen - endLen, strLen) === ending) return true
  return false
  
}