class Queue {
  constructor(collection) {
    this.collection = collection || []
  }

  enqueue(item) {
    return this.collection.push(item)
  }

  dequeue() {
    return this.collection.shift()
  }

  front() {
    return this.collection[0]
  }

  size() {
    return this.collection.length
  }

  isEmpty() {
    return this.collection.length === 0 ? true : false;
  }
}

let myQueue = new Queue([1, 2, 3])

console.log(myQueue)

let myQueue2 = new Queue()

console.log(myQueue2)
console.log(myQueue2.isEmpty())
console.log(myQueue2.enqueue('test'))
console.log(myQueue2.front())
console.log(myQueue2.isEmpty())
console.log(myQueue2.dequeue())
console.log(myQueue2)

myQueue2.collection.push('beans')
console.log(myQueue2)