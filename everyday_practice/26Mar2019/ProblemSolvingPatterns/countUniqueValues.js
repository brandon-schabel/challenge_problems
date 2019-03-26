// https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/11183948#overview

// explanation to the problem
// https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/11183944#overview
const countUniqueVals = (arr)  => {
  if(arr.length === 0 ) return 0;
  let i = 0;
  for(var j = 1; j < arr.length; j++ ) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
    console.log(i, j)
  }
  return i+1
}


console.log(countUniqueVals([1,1,2,3,3,4,5,6,6,7]))


const countUniqueVals2 = (arr) => {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  
  while(j < arr.length) {
      if(arr[j] !== arr[i]) {
          i++;
          arr[i] = arr[j];
          j++;
      } else {
          j++;
      }
  }
  return i +1;
}

console.log(countUniqueVals2([1,1,2,3,3,4,5,6,6,7]))

console.time('countUniqueVals2')
countUniqueVals2([1,1,2,3,3,4,5,6,6,7])
console.time('countUniqueVals2')

// const testObj = {
//   "test": "beans",
//   "test2": "beans1"
// }

// const { test2, ...other } = testObj
// console.log(testObj)