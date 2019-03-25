function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let dnaRnaObj = {
    'T': 'U',
    'G': 'G',
    'A': 'A',
    'C': 'C'
  }
  
  let result = ''
  
  dna.split('').forEach(char => {
    result += dnaRnaObj[char]
  }) 
  
  return result
}