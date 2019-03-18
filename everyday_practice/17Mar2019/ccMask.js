// https://www.codewars.com/kata/credit-card-mask/train/javascript
function maskify(cc) {
  const ccLen = cc.length
  if (ccLen <= 4) {
    return cc
  }

  let result = []

  for (let i = 0; i < cc.length - 4; i++) {
    result.push("#")
  }

  result.push(cc.slice(ccLen - 4, ccLen))

  return result.join("")
}