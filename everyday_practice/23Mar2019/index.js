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

// https://www.codewars.com/kata/total-amount-of-points/train/javascript
function points(games) {
  // your code here
  let total = 0;
  games.forEach(game => {
    let currGame = game.split(":");
    let x = parseInt(currGame[0]);
    let y = parseInt(currGame[1]);
    
    if(x > y) total += 3;
    if(x === y) total +=1;
  })
  
  return total;
}

// https://www.codewars.com/kata/function-1-hello-world/train/javascript
const greet = () => "hello world!"

// https://www.codewars.com/kata/how-many-stairs-will-suzuki-climb-in-20-years/train/javascript
function stairsIn20(s){
  //your code here
  let total = 0;
  s.forEach(day => {
    day.forEach(steps => {
      total += steps;
    })
  })
  return total * 20;
}


