// Frequency Counters
//this pattern uses objects or sets to collect values/frequencies of values
// this can often avoid the need for nested loops or
// O(n^2) operations with arrays/strings

//write a function called same which accepts two arrays,
// the function should return true if every value in the array has its
// corresponding value squared in the second array. The frequency of values
// must be the same

// naive solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

console.log(same([1, 2, 3, 4], [2, 4, 6, 8]))



function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    // set val equal to 0 if it doesn't exist otherwise add 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    // if key squared is a key in freqcounter 2
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }

    //next you're checking if the values correspond
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}

console.log(same2([1,2,3], [2,4,6]));

