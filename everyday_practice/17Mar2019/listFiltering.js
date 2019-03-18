https://www.codewars.com/kata/list-filtering/train/javascript

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(el => typeof el === "number")
}