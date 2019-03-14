// https://www.codewars.com/kata/highest-and-lowest/train/javascript

const highestAndLowest = (numbers) => {
 
  const splitNums = numbers.split(" ").map(num  => parseInt(num));
  let smallest = splitNums[0];
  let largest = splitNums[0];
  
  splitNums.forEach(num => {
    num < smallest ? smallest = num : null
    num > largest ? largest = num : null
  })
  return `${largest} ${smallest}`
}

