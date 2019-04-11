const leastToGreatest = (numArr) => {
  let numArrLength = getArrLength(numArr);
  console.log(numArrLength)
  let results = []

  for(let i = 0; i < numArrLength; i++) {
    if(results[0] === undefined) {
      results[0] = numArr[i]
    } else{
      for(let j = 0; j < getArrLength(results); j++) {
        if(results[j]  >= numArr[i]) {
          
        }
      }
    } 
    
  }
}

const getArrLength = (arr) => {
  let arrLength = 0;
  while(arr[arrLength] !== undefined) {
    arrLength++
  }
  return arrLength;
} 

leastToGreatest([1,23,4,5,2,3,48,9,0])