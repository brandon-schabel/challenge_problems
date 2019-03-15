// https://www.codewars.com/kata/unique-in-order/train/javascript

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let uniqueChars = [];
  if((typeof iterable) === 'string') {
    iterable = iterable.split('');  
  }
  
  iterable.forEach((currChar, index) => {
    if(index !== iterable.length) {
      let nextChar = iterable[index + 1]  
      if(currChar !== nextChar) {
        uniqueChars.push(currChar);
      }
    } else {
      let prevChar = iterable[index - 1]
      if(prevChar !== currChar) {
        uniqueChars.push(currChar);
      }
    }
  })
  
  return uniqueChars;
}