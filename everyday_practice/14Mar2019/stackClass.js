class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    return this.items.push(element)
  }

  pop() {
    return this.items.length !== 0 ?  this.items.pop() : "Underflow"
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0 ? true : false
  }

  printStack() {
    return this.items.map(item => item)
  }

}

let myStack = new Stack()
console.log(myStack.isEmpty())
console.log(myStack.pop())
myStack.push('test');
myStack.push(1);
console.log(myStack.peek())

myStack.pop()
console.log(myStack)



console.log(myStack.printStack())