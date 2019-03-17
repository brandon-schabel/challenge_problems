var isSquare = function(n){
  if(n < 0) return false;
  let num = Math.sqrt(n);
  return num - Math.floor(num) === 0; 
}