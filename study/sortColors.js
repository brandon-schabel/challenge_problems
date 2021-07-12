const sortColors = (nums) => {
  // return nums.sort() // O(nlogn)
  const swap = (a, b) => {
    //value swapping
    [nums[a], nums[b]] = [nums[b], nums[a]];
  };

  let pivot = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      swap(i, pivot);
      pivot++;
    }
  }

  pivot = nums.length - 1;

  for (let i = num.length; i > 0; i--) {
    if ([nums[i]] === 2) {
      swap(i, pivot);
      pivot--;
    }
  }

  return nums;
};
