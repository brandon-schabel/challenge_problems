// Sliding Window
// https://leetcode.com/problems/fruit-into-baskets/submissions/

/**
 * @param {number[]} fruits
 * @return {number}
 */

// basketACount = 0
// basketBCount = 0

// [1, 2, 2, 3, 3, 4]
//     a    
//              b     
    
var totalFruit = function(fruits) {
    const basket = new Map()
    
    let a = 0
    let sum = 0
    
    for(let b = 0; b < fruits.length; b++) {
        const fruit = fruits[b]
        basket.set(fruit, basket.get(fruit) + 1 || 1)
     
        // while fruits in basket is greater than 2, increment a, decrement fruit from basket
        while(basket.size > 2) {
            const fruitAtPointerA = fruits[a]
            
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