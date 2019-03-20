https://www.codewars.com/kata/remove-the-minimum/train/javascript
function removeSmallest(numbers) {
  // throw "TODO: removeSmallest";
  let smallest = numbers[0]
  let smallestIndex = 0
  numbers.forEach((num,index) => {
    if(num < smallest) {
      smallest = num
      smallestIndex = index
    }
  })
  
  const result = [...numbers];
  result.splice(smallestIndex, 1);
  
  return result;
}