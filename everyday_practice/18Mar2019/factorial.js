// https://www.codewars.com/kata/factorial/train/javascript

const factorial = (num) => {
  let total = 1;
  
  for(let i = 1; i <= num; i++) {
    total *= i;
  }
  
  if(num < 0 || num > 12) throw "RangeError"
  return total;
}