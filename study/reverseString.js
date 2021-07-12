/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = (s) =>    {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
      // swap values inline, you can swap more than just 2 values
    [s[i], s[j]] = [s[j], s[i]];
    // let temp = s[i]
    // s[i] = s[j]
    // s[j] = temp
    i++;
    j--;
  }
  return s;
};
