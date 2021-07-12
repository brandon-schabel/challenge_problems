// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  const sumList = (list) => {
    let currNode = list.next;
    console.log(list.next);
    let sum = 0;
    if (!currNode) return sum;

    while (currNode.next) {
      sum += currNode.value;
      currNode = currNode.next;
    }

    console.log(sum);
    return sum;
  };

  console.log("return ", sumList(linkedListOne) + sumList(linkedListTwo));

  return sumList(linkedListOne) + sumList(linkedListTwo);
}
