function findLongest(array){
  // code here
  let maxIndex = 0;
  let max = 0;
  
  array.forEach((num, index) => {
    let numLen = num.toString().split('').length
    
    if(numLen > max) {
      maxIndex = index;
      max = numLen;
    }
  })
  
  return array[maxIndex]
}