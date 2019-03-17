// https://www.codewars.com/kata/exes-and-ohs/train/javascript
function XO(str) {
  //code here
  let x = 0
  let o = 0

  str
    .toLowerCase()
    .split("")
    .forEach(char => {
      if (char === "x") x++
      if (char === "o") o++
    })
  if (x === o) {
    return true
  } else {
    return false
  }
}
