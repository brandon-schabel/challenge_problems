// linked list has a head, lenght, and a tail
// visualgo.net

// var first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    var newNode = new Node(val)
    //if a head does not exist, then head and tail get set to the newNode
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      // otherwise take the current tail and set it to the new node
      this.tail.next = newNode
      // then move the tail market over to the new node
      this.tail = newNode
    }

    this.length++
    return this //returns the whole list
  }

  // traverse() {
  //   var current = this.head;
  //   while(current) {
  //     console.log(current.val)
  //     // keeps going until it hits the tail, because on the tail
  //     // current.next would be null
  //     current = current.next;
  //   }
  // }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current) {
      newTail = current
      current = current.next
    }

    // set tail to newTail(i.e previous)
    this.tail = newTail
    // set next of current tail to null and then it is gone.
    this.tail.next = null

    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return undefined
    const currHead = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currHead
  }

  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index > this.length) return null
    let counter = 0

    let current = this.head

    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  set(index, val) {
    let selectedNode = this.get(index)
    console.log(selectedNode)
    if (selectedNode) {
      selectedNode.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null
    if (index === 0) !!this.unshift(val) //return true if it worked, otherwise returns false
    if (index === this.length) !!this.push(val)

    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return null
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let previousNode = this.get(index-1)
    var removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
  }

  // https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/11078964#overview
  reverse(){
    //temp store our head
    var node = this.head
    // set our head to our tail
    this.head = this.tail
    // set the tail to our head
    this.tail = node

    let next;
    // we set prev to null becasuse we want the tail to be null
    var prev = null;

    for(let i = 0; i < this.length; i++) {
      // next will be the next of whatever we're currently looking at
      next = node.next
      node.next = prev;

      prev = node;
      node = next
    }

    return this
  }
}


let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")
// console.log(list)

console.log(list)

list.shift()
console.log(list)

list.unshift(10)
console.log(list)

console.log(list.get(2))
console.log(list.get(0))

console.log(list.set(0, "test"))
console.log(list.get(0))


list.insert(1,'beans')

console.log(list) 
list.remove(2)
console.log(list)

list.reverse()
console.log(list)