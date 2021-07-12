// sliding window
// https://leetcode.com/problems/minimum-size-subarray-sum/

//  0 1 2 3 4 5
// [2,3,1,2,4,3]
//          j
//            i

// target 7

// shortestSum = 0

// 2 = 2              -> move i
// 2 + 3  = 5         -> move i
// 2 + 3 + 1 = 6      -> move i
// 2 + 3 + 1 + 2 = 8  -> move j
// 3 + 1 + 2 = 6      -> move i
// 3 + 1 + 2 + 4 = 10 -> move j
// 1 + 2 + 4 = 7      -> MATCH, distance from i(4) - j(2) + 1(plus 1 is for inclusive) = 3 <- this is the shortestSum so far, move i  *** shortestSum = 3
// 1 + 2 + 4 + 3 = 10 -> move j
// 2 + 4 + 3 = 9      -> move j
// 4 + 3 = 7          -> MATCH, distance from i(5) - j(4) + 1 = 2 <- this is the shortest so far( and the answer) ***shortestSum = 2

// return shortest sum

// could we make an optimization to where if the shortest match is 3, then it should never get bigger?


// this window will act like a queue, so as we move j we want to remove the old numbers, and when we move i we want to add those numbers, which means we will always have the sum
// we want to move i when the current sum is less than the target.
// we will want to move j when the sum is greater than the target(removing numbers)
// we want to get the sum of the items in the sub array from a to b
// if we find a match, then we want to see if the new sub array is the shortest with that totla


var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let jPointer = 0;
    let shortestSumLength = Infinity; // Infinity because we want to find the shortest sum, we want to start with the highest possible number
    
    for(let iPointer = 0; iPointer < nums.length; iPointer++ ) {
        const valAtIPointer = nums[iPointer]
        sum += valAtIPointer
        
        while(sum >= target) {
            // calculate current sum length
            const sumLength = iPointer - jPointer + 1
            // find if new sum length is shorter than previous 
            shortestSumLength = Math.min(shortestSumLength, sumLength)
            
            // get value at pointer j and then subtract it from the sum(because it is sliding away from that number)
            const valAtJPointer = nums[jPointer]

            // subtract value at pointer j from sum
            sum -= valAtJPointer
            
            
            jPointer++
        }
    }
    
    return shortestSumLength === Infinity ? 0 : shortestSumLength
};