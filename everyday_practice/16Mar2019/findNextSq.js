const findNextSquare = (sq) => {
  // Return the next square if sq if a perfect square, -1 otherwise
  let num = Math.sqrt(sq)
  if (num - Math.floor(num) === 0) {
    num++
    return num * num
  } else {
    return -1
  }
}
