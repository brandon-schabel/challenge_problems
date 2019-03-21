function dontGiveMeFive(start, end){
  const result = []
  for(let i = start; i <= end; i++){
    let containsFive = false;
    i.toString().split('').forEach(char => {
      if(char == '5') containsFive = true
    })
    
    if(!containsFive) {
      result.push(i)
    }
  }
  
  return result.length;
}