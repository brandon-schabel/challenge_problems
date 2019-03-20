// https://www.codewars.com/kata/odd-or-even/javascript
function oddOrEven(array) {
  //enter code here
  let total = 0;
  array.forEach(n => total += n) 
  if(total % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}