//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript/me/best_practice

function DNAStrand(dna){
  //your code here
  let decodeObj = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G",
  }
  
  return dna.split("").map(char => decodeObj[char]).join('');
}