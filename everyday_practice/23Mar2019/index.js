// https://www.codewars.com/kata/who-is-going-to-pay-for-the-wall/train/javascript
function whoIsPaying(name){
  //your code here
  if(name.length < 3) return [name]
  return [name, name.split("").splice(0, 2).join('')];
}

// https://www.codewars.com/kata/55edaba99da3a9c84000003b/solutions/javascript/me/best_practice
function divisibleBy(numbers, divisor){
  let result = [];
  numbers.forEach(num => {
    if(num % divisor === 0) result.push(num);
  })
  
  return result
}