// https://www.codewars.com/kata/your-order-please/train/javascript

const order = (words) => {
  // ...
  const splitWords = words.split(" ");
  let currWordIndex = 0;
  let result = Array(splitWords.length).map(() => null);

  splitWords.forEach(word => {
    currWordIndex = word.split("").filter(char => parseInt(char) > 0)
    currWordIndex = parseInt(currWordIndex[0]);
    result[currWordIndex] = word;
  })
  
  return result.join(' ').trim();
}