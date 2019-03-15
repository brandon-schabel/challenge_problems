// https://www.codewars.com/kata/bit-counting/train/javascript

var countBits = function(n) {
  // Program Me
  const binaryNum = (n >>> 0).toString(2)
  let count = 0

  binaryNum.split("").forEach(char => (char === "1" ? (count += 1) : null))

  return count
}

console.log(countBits(10));