/*
Write a function that outputs the provided 
string as an ordered list

Expected Output:
<ol>
  <li>ordered list</li>
  <li>ordered list</li>
  <li>ordered list</li>
  <li>ordered list</li>
</ol>

*/

const olString = '\t1. \tordered list\n\t2. \tordered list\n\t3. \tordered list\n\t4. \tordered list'

/* solution */
const convertToHtmlList = (olString) => {
  let olStringArr = ['<ol>\n']

  olString.split('\n').forEach((string) => {
    string = string.slice(5, string.length)
    olStringArr.push(`\t<li>${string}</li>\n`)
  })

  olStringArr.push('</ol>');
  
  return olStringArr.join('')
}