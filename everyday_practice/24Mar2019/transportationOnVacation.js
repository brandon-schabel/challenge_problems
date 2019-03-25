function rentalCarCost(d) {
  // Your solution here
  let total = d * 40;
  
  if(d >= 3 && d <= 6) return total - 20;
  if(d >= 7) return total - 50
  return total
}