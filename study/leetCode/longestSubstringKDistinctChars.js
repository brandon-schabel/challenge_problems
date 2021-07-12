// Sliding Window
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/submissions/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    // sliding window similar to last problem, we need to keep track of characters in a map, 
    const basket = new Map()
    
    let a = 0
    let sum = 0
    
    for(let b = 0; b < s.length; b++) {
        const fruit = s[b]
        basket.set(fruit, basket.get(fruit) + 1 || 1)
     
        // while s in basket is greater than 2, increment a, decrement fruit from basket
        while(basket.size > k) {
            const fruitAtPointerA = s[a]
            
            a++
            
            const fruitCount = basket.get(fruitAtPointerA) - 1
            basket.set(fruitAtPointerA, fruitCount)
            
            if(fruitCount === 0) {
                basket.delete(fruitAtPointerA)
            }
        }
        
        const currSum = b - a + 1
        
        sum = Math.max(sum, currSum)
        
    }
    
    return sum
    
};