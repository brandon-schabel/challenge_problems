var romanToInt = function(s) {
  let decVal =    [1000, 900,  500, 400,  100, 90,   50,  40,   10,   9,    5,   4,    1]
  let romanVal =  ["M",  "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  
  let result = ''
  
  let inputNum = s;
  for(let i = 0; i < decVal.length; i++) {
      while(inputNum > decVal[i]) {
          result += romanVal[i]
          inputNum -= decVal[i]
      }
  }
  
  return result

  
};