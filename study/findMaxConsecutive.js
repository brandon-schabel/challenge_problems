// greedy algorithm
// looking for any solution

const findMaxConsecutive = (nums) => {
  // since we are finding max consective  start with lowest number
  let res = -Infinity;

  let counter = 0;

  for (let n of nums) {
    if (n === 1) {
      counter++;
    } else {
      counter = 0;
    }
    // set res to the biggest number, 
    res = Math.max(res, counter);
  }

  return res;
};
