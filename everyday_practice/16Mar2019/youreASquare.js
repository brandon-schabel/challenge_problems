https://www.codewars.com/kata/56269eb78ad2e4ced1000013/solutions/javascript

const isSquare = function(n){
  if(n < 0) return false;
  let num = Math.sqrt(n);
  return num - Math.floor(num) === 0; 
}