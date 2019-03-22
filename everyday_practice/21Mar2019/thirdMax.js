var thirdMax = function(nums) {
  const sorted = nums.sort((a, b) => b - a)
  let sortedFiltered = []
  
  sorted.forEach((num,i) => {
      if(sorted[i-1] !== num) {
          sortedFiltered.push(num)
      }
  })
  
  if(sortedFiltered.length > 2) {
      return sortedFiltered[2]
  } else {
      return sortedFiltered[0]
  }
};