// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
twoToOne = (s1, s2) => {
  s1 = s1.split('')
  s2 = s2.split('')
  let returnArr = []
  
  s1.forEach(element =>{
      if(returnArr.indexOf(element) === -1) {
        returnArr.push(element)
      }
    }
  )
  
  s2.forEach(element =>{
      if(returnArr.indexOf(element) === -1) {
        returnArr.push(element)
      }
    }
  )
  
  return returnArr.sort().join('');
}

