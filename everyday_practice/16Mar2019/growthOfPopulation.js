function nbYear(p0, percent, aug, p) {
  // your code
  let target = p0
  let count = 0
  while (target < p) {
    target = target * (1 + percent / 100) + aug
    count++
  }

  return count
}
