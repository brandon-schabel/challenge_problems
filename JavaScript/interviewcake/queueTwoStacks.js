class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if(this.outStack.length === 0) {

      //Move items from inStsck to outStack, reversing order
      while(this.inStack.length > 0) {
        const newestItemInStack = this.inStack.pop();
        this.outStack.push(newestItemInStack);
      }

      // If outStack is still empty, raise an error
      if(this.outStack.length === 0) {
        throw new Error("Can't dequeue form empty queue!");
      }
    }

    return this.outStack.pop()
  }
}

let stackQueue = new QueueTwoStacks();

stackQueue.enqueue(10)
console.log(stackQueue)
stackQueue.enqueue(10)
stackQueue.enqueue(11)
stackQueue.enqueue(12)
stackQueue.enqueue(13)
stackQueue.enqueue(14)
stackQueue.enqueue(15)

console.log(stackQueue);
stackQueue.dequeue();

console.log(stackQueue);