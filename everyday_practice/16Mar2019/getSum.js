// https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript
const GetSum = (a, b) => {
  //Good luck!
  let total = 0

  if (b >= a) {
    for (let i = a; i <= b; i++) {
      console.log(i)
      total += i
    }
  } else {
    for (let i = b; i <= a; i++) {
      total += i
    }
  }

  return total
}
