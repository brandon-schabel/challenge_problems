// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript

export const findEvenIndex = arr => {
  /* start at index 0, loop from index 2(skipping 1) through the end, add them all together, 
   if the rest of the array equals the first element then return index 0, if not 
   go to index 1 and add index 0 and 1 then loop through rest of array(again skipping
   one index because its the middle and get total, repeat until both sides are equal */

  // console.log("STARTING ARRAY", arr);
  for (let i = 0; i < arr.length; i++) {
    let leftSideTotal = 0;
    let leftSide = [];
    // add all left side
    for (let j = 0; j <= i; j++) {
      leftSide.push(arr[j]);
      leftSideTotal += arr[j];
    }
    // console.log("left side", leftSide);
    // console.log("left total", leftSideTotal);

    let rightSideTotal = 0;
    let rightSide = [];
    //add up right side
    for (let k = i + 2; k < arr.length; k++) {
      rightSide.push(arr[k]);
      rightSideTotal += arr[k];
    }
    // console.log("right side", rightSide);
    // console.log("right total", rightSideTotal);

    // console.log("\n");
    if (leftSideTotal === rightSideTotal) {
      return i + 1;
    }
  }

  return -1;
};
