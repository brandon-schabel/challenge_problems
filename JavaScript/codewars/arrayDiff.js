// https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/solutions
const arrayDiff = (a, b) => {
  differences = []
  a.forEach(element => {
    if(b.indexOf(element) == -1) {
      differences.push(element);
    }
  })
  
  return(differences);
}