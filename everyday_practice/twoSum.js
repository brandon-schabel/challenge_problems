// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let resultFound = false
    let returnArray = [];
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                returnArray = [i, j];
                resultFound = true;
                break;
            }
        }
        if(resultFound) {
            break;
        }
        
    }
    
    return returnArray
};
