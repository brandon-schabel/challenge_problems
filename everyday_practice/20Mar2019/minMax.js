function minMax(arr){
  let min = arr[0]
  let max = arr[0]
  
  arr.forEach(num => {
    if(num < min) {
      min = num;
    } 
    
    if( num > max) {
      max = num;
    }
  }) 
  
  return [min, max]
}