function boolToWord( bool ){
  //...
  return bool ? "Yes" : "No"
}

function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

function litres(time) {
  return Math.floor(time * 0.5);
}

function invert(array) {
  return array.map(n => n !== 0 ? n * -1 : 0);
}

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

function reverseStr(str){
  return str.split('').reverse().join('');
}

function createPhoneNumber(numbers){
  let n = numbers;
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}