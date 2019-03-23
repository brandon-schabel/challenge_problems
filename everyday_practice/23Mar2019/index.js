// https://www.codewars.com/kata/who-is-going-to-pay-for-the-wall/train/javascript
function whoIsPaying(name){
  //your code here
  if(name.length < 3) return [name]
  return [name, name.split("").splice(0, 2).join('')];
}