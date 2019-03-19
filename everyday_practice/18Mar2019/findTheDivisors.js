// https://www.codewars.com/kata/find-the-divisors/train/javascript

function divisors(integer) {
  const maxDivisor = integer / 2;
  let divisors = [];
  
  for(let i = 2; i <= maxDivisor; i++){
    if(integer % i === 0) {
      divisors.push(i);
    }
  }
  
  if(divisors.length === 0) return `${integer} is prime`
  return divisors;
  
};