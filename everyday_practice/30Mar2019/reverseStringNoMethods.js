const reverseString = (string) => {
  let newString = '';
  for(let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
}

console.time('reverse string no method')
console.log(reverseString('test'))
console.timeEnd('reverse string no method')

console.time('reverse w/ built in methods')
'test'.split('').reverse().join('')
console.timeEnd('reverse w/ built in methods')