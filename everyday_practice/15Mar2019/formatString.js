// format a string with array https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

function list(names){
  //your code here
  switch(names.length) {
    case 0: return '';
    case 1: return names[0].name
    case 2: return `${names[0].name} & ${names[1].name}`
    case 3: return `${names[0].name}, ${names[1].name} & ${names[2].name}`
    default:
      let result = ``
      for(let i = 0; i < names.length - 2; i++) {
        result = result + `${names[i].name}, `
      }
      result = result + `${names[names.length - 2].name} & `
      result = result + `${names[names.length - 1].name}`
      return result
  }
}


test1 = [ { name: 'Bart' }, { name: 'Lisa' } ]
console.log(list(test1))