// https://www.codewars.com/kata/563b662a59afc2b5120000c6/solutions/javascript
const nbYear = (p0, percent, aug, p) => {
  // your code
  let target = p0
  let count = 0
  while (target < p) {
    target = target * (1 + percent / 100) + aug
    count++
  }

  return count
}
