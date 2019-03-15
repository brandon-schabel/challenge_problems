//https://www.codewars.com/kata/take-a-ten-minute-walk

function isValidWalk(walk) {
  //insert brilliant code here
  if(walk.length !== 10) return false
  
  let NS = 0;
  let EW = 0;
  
  walk.forEach(direction => {
    switch(direction) {
      case 'n':
        NS++;
        break;
      case 's':
        NS--;
        break;
      case 'e':
        EW++;
        break;
      case 'w':
        EW--;
        break;
    }
  })
  
  return NS + EW === 0 ? true : false
}