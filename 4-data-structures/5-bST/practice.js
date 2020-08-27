class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if ((current.val = val)) return undefined;
      if (current.val < val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        if (current.val > val) {
          if (!current.left) {
            current.left = node;
            return this;
          }
          current = current.left;
        }
      }
    }

    return this;
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      if (current.val > val) current = current.left;
      else current = current.right;
    }
    return undefined;
  }

  contains(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return true;
      if (current.val > val) current = current.left;
      else current = current.right;
    }
    return false;
  }

  bFS() {
    const queue = [this.root],
      data = [];

    while (queue.length) {
      let node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dFSLoop() {
    const stack = [this.root],
      data = [];

    while (stack.length) {
      let node = stack.pop();
      data.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    return data;
  }

  dFSPreOrder() {
    const data = [];
    (function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(this.root);
    return data;
  }

  dFSInOrder() {
    const data = [];
    (function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    })(this.root);
    return data;
  }

  dFSPostOrder() {
    const data = [];
    (function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    })(this.root);
    return data;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(9);
bst.insert(8);
bst.insert(12);
bst.insert(77);
bst.insert(78);
bst.insert(79);
bst.insert(80);
bst.insert(85);
bst.insert(83);
bst.insert(82);
bst.insert(11);

// console.log(bst.bFS());
// console.log(bst.dFSLoop());
// console.log(bst.dFSPreOrder());
