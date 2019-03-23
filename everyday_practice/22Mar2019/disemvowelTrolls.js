function disemvowel(str) {
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
  let result = ""
  str.split("").forEach(char => {
    if (vowels.indexOf(char) === -1) result += char
  })
  return result
}
