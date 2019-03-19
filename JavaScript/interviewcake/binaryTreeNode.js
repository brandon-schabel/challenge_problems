class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

let tree = new BinaryTreeNode(10);
console.log(tree)
tree.insertLeft(20);
tree.insertRight(30)
console.log(tree)

tree.right.insertLeft(10)
tree.right.insertRight(5)
console.log(tree)