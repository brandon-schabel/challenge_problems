// https://www.codewars.com/kata/find-the-stray-number/train/javascript
function stray(numbers) {
  let numObj = {}
  numbers.forEach(num => {
    if (numObj[num]) {
      numObj[num] += 1
    } else {
      numObj[num] = 1
    }
  })

  for (let numKey in numObj) {
    if (numObj[numKey] === 1) {
      return parseInt(numKey)
    }
  }
}
