// helper method recursion is where we have an outer method that is not recursive,
// then we have an inner method that is recursive.

const collectOddValues = (arr) => {
  let result = []

  const helper = (helperInput) => {
    if(helperInput.length === 0) {
      return;
    }
    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1,2,3,4,5,65,6,76,2,23,43,2,423,423,432,4,321,,2321,654,65]));