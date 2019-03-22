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