function isSortedAndHow(array) {
  let dupeArray = [...array]
  
  // check ascending
  dupeArray = dupeArray.sort((a,b)=> a-b)
  let isAsc = true;
  array.forEach((el, i) => {
    if(array[i] !== dupeArray[i]) isAsc = false;
  })
  if(isAsc) return 'yes, ascending'
  
  // check descending
  dupeArray = dupeArray.sort((a, b) => b - a)
  let isDes = true
  array.forEach((el, i) => {
    if(array[i] !== dupeArray[i]) isDes = false;
  })
  if(isDes) return 'yes, descending'
  
  return 'no'
}