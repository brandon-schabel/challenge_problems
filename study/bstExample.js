class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null
    this.right = null;
  }
}

function buildBST(array, start = 0, end = array.length - 1) {
  if (start > end) return null;
  const half = Math.floor((start + end) / 2);
  const root = new TreeNode(array[half]);
  root.left = buildBST(array, start, half - 1);
  root.right = buildBST(array, half + 1, end);
  return root;
}

const bst = buildBST([0, 1, 2, 3, 4, 5, 6]);

console.log(bst)


const inorder = (root) => {
  if (!root) return root;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};

const getArray = (root) => {
  const sorted = [];

  const dfs = root => {
    if (!root) return
    dfs(root.left)
    sorted.push(root.val)
    dfs(root.right)
  }

  dfs(root);
  return sorted;
};


inorder(bst)