// https://www.codewars.com/kata/persistent-bugger/train/javascript

function persistence(num) {
  //code me
  result = 1000
  counter = 0
  
  if(num < 11) {
    return 0
  } else {
    while(result > 9){
    counter += 1
    result = 1
    num = num.toString().split('')
    num.forEach(item => {
      item = parseInt(item)
      result *= item
      num = result 
    })
  }
  return counter;
  }
}