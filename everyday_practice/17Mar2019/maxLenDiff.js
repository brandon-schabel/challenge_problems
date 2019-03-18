function mxdiflg(a1, a2) {
  // your code
  const a1Max = getMax(a1);
  const a2Max = getMax(a2);

  return(Math.abs(a1Max - a2Max))
}

const getMax = arr => {
  let maxLen = 0
  arr.forEach(word => {
    if (word.length > maxLen) {
      maxLen = word.length
    }
  })
  console.log(maxLen)
  return maxLen
}