// Sliding Window
// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

/**
 * @param {string} s
 * @return {number}
 */

//abcabcbb
// a   
//   b




// pwwkew
//    a   
//      b
var lengthOfLongestSubstring = function(s) {
    // we just need to check if the char already exist in the map, if it does, then we move the a pointer to where it was last seen(what the value is in the map)
    const charIndexMap = new Map()
    let maxSubStrLen = 0
    let a = 0
    
    for(let b = 0; b < s.length; b++) {
        const charAtPointerB = s[b]

        if(charIndexMap.has(charAtPointerB)) {
            const newAIndex = charIndexMap.get(charAtPointerB) + 1
            // if(newAIndex > a ) {
            //   a = charIndexMap.get(charAtPointerB) + 1     
            // }
            
            a = Math.max(newAIndex, a)
            
        }
        
        charIndexMap.set(charAtPointerB, b)
        
        
       maxSubStrLen = Math.max(b - a + 1, maxSubStrLen)
    }
    
    return maxSubStrLen
};