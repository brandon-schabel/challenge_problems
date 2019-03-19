// https://www.codewars.com/kata/largest-5-digit-number-in-a-series/train/javascript

function solution(digits){
  let numbers = []
  let splitDigits = digits.toString().split('');
  let currNum = 0
  
  for(let i = 0; i < splitDigits.length - 4; i++) {
    currNum = parseInt(splitDigits.slice(i, i+5).join(''));
    numbers.push(currNum); 
  }
  
  let max = 0;
  numbers.forEach(num => {
    if(num > max) max = num;
  })
  
  return max;
}