function spinWords(inputStr){
  //TODO Have fun :)
  //split sptring
  //console.log(inputStr);
  inputStr = inputStr.split(" ")
  //for loop and see if each word is greater than length of 5
  for(let i = 0; i < inputStr.length; i++){
    if(inputStr[i].length > 4) {
    // if it is, reverse the word
      inputStr[i] = inputStr[i].split('').reverse()
      inputStr[i] = inputStr[i].join('')
    }
  }
  //console.log(inputStr)
  return inputStr.join(' ');
}