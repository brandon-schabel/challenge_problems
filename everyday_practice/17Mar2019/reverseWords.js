function reverseWords(str) {
  // Go for it
  const result = [];
  str.split(" ").forEach(word => {
    word = word.split('').reverse().join('');
    result.push(word);
  })
  
  return result.join(' ');
}