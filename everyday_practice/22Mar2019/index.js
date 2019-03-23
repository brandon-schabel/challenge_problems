const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!'
  if(p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!'
  if(p1 === 'paper' && p2 === 'rock') return 'Player 1 won!'
  if(p1 === p2) return 'Draw!'
  if(p2 === 'scissors' && p1 === 'paper') return 'Player 2 won!'
  if(p2 === 'rock' && p1 === 'scissors') return 'Player 2 won!'
  if(p2 === 'paper' && p1 === 'rock') return 'Player 2 won!'
};

function squareSum(numbers){
  let total = 0;
  numbers.forEach(num => {
    total += num*num
  })
  return total
}

function abbrevName(name){
  // code away
  const splitName = name.toUpperCase().split(" ")
  
  return `${splitName[0][0]}.${splitName[1][0]}`
  
}

function bonusTime(salary, bonus) {
  // your code here
    if(bonus){
      return `£${salary*10}`
    } else {
      return `£${salary}`
    }
  }

  function feast(beast, dish) {
    //your function here
      if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) {
        return true
      } else {
        return false
      }
    }