//inefficient O(n^2)
const fib = n => {
  if (n === 0 || n === 1) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(20))

class Fibber {
  constructor() {
    this.memo = {}
  }

  fib(n) {
    if (n < 0) {
      throw new Error(
        "Index was negative. No such thing as a negative in a series"
      )
    } else if (n === 0 || n === 1) {
      return n
    }

    if (this.memo.hasOwnProperty(n)) {
      return this.memo[n]
    }

    const result = this.fib(n - 1) + this.fib(n - 2)

    this.memo[n] = result
    return result
  }
}

const getFib = new Fibber()
console.log(getFib.fib(20));


function fib2(n) {

  // Edge cases:
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }

  // We'll be building the fibonacci series from the bottom up
  // So we'll need to track the previous 2 numbers at each step
  let prevPrev = 0;  // 0th fibonacci
  let prev = 1;      // 1st fibonacci
  let current;       // Declare current

  for (let i = 1; i < n; i++) {

    // Iteration 1: current = 2nd fibonacci
    // Iteration 2: current = 3rd fibonacci
    // Iteration 3: current = 4th fibonacci
    // To get nth fibonacci ... do n-1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

console.log(fib2(20))