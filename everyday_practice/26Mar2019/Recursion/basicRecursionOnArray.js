// https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344120#overview
/*
  with recursion everything gets pushed to the stack until you uhit the base case
  from there it goes through the call stack and calculates everything in reverse.
*/
const removeItemsUntilEmpty = (arr) => {
  if(arr.length === 0) return [];
  arr.pop()
  console.log(arr)
  return removeItemsUntilEmpty(arr)
}

removeItemsUntilEmpty([1,2,3,4,5,6,7,1,12,34,5,6,7])


const sumRange = (num) => {
  if(num === 1) return 1
  return num + sumRange(num-1)
}

console.log(sumRange(10000))


const factorial = (num) => {
  if(num ===1) return 1
  return num * factorial(num-1)
}

console.log(factorial(5))