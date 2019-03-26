const sumZero = (arr) => {
  let left = 0;
  let right = arr.length -1;

  // while they aren't at the same point, then we know we have exhausted ever pair
  while(left < right) {
    let sum = arr[left] + arr[right]

    // check to see if our current sum === 0;
    if(sum === 0 ) {
      return [arr[left], arr[right]]
    // if sum > 0, we know that we need to go down on the right side
    } else if(sum > 0) {
      right--
    // if sum < 0, we know that we need to go up on the left side
    } else {
      left++
    }
  }
}


console.log(sumZero([-6,-4,-3,-2,-1, 0, 1,2,3,4,5]));