// your code
let splitStr = "103 123 4444 99 2000".split(" ")

let totals = {}
for (let i = 0; i < splitStr.length; i++) {
  let currTotal = 0
  
  let currNumber = splitStr[i].split("")
  
  for (let j = 0; j < currNumber.length; j++) {
    
    currTotal += parseInt(currNumber[j])
  }

  totals[splitStr[i]] = currTotal
  
  // let pushTo = splitStr.length;
  // for(let i = .length; i > 0; i--) {
  //   if(currTotal)

  // }
  // 
  // totals.push(currTotal);
}
let sorted = []
for(each in totals) {
  
  if(sorted.length ===0) {
    sorted.push(each)
  } else {
    for(let i = 0; i < sorted.length; i++) {
      if(totals[each] > totals[sorted[i]]) {
        sorted.splice(i, 0, each)
        i = sorted.length
      }

    }
  }

}

console.log(sorted)
// splitStr = splitStr.map(number => {
//   return parseInt(number)
// })

//

// const orderWeight = (strng) => {
//   // your code
//   let splitStr = strng.split();
//   splitStr.map(number => {
//     parseInt(number);
//   })

// }

// let testWeight1 = "103 123 4444 99 2000";
// let testWeight2 = "2000 10003 1234000 44444444 9999 11 11 22 123"

// 
