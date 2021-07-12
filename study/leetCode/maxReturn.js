let maxReturn = -Infinity
let leftPointer = 0
let rightPointer =  prices.length - 1
let lowestBuyPointer = 0
let highestSellPointer = prices.length -1
 

while(leftPointer < rightPointer) {
   const leftPointerVal = prices[leftPointer]
   const rightPointerVal = prices[rightPointer]
   const lowestBuyVal = prices[lowestBuyPointer]
   const highestSellVal = prices[highestSellPointer]
   
   const currProfit = rightPointerVal - leftPointerVal 
   
   
   
   const nextLeftVal = prices[leftPointer + 1]
   const nextRightVal = prices[rightPointer - 1]
   
   if(nextLeftVal < leftPointerVal) {
       leftPointer++
       lowestBuyPointer = leftPointer
   } else if (nextRightVal > rightPointerVal) {
       rightPointer--
       highestSellPointer = rightPointer      
   } else if(rightPointerVal < highestSellVal) {
       rightPointer = highestSellPointer
   }
     else if(leftPointerVal > lowestBuyVal) {
       leftPointer = lowestBuyPointer
   } else {
       rightPointer-- 
   }
    
    maxReturn = Math.max(maxReturn, currProfit) 
    


}
if(maxReturn < 0) return 0


return maxReturn 