function GetSum(a, b) {
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
