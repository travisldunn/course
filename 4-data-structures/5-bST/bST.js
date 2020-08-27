class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    while (true) {
      if (!current) return undefined;
      if (value === current.value) return current;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
  }

  contains(value) {
    let current = this.root;
    while (true) {
      if (!current) return false;
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
  }

  bFS() {
    let node = this.root,
      queue = [node],
      data = [];

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dFSLoop() {
    let node = this.root,
      stack = [node],
      data = [];

    while (stack.length) {
      node = stack.pop();
      data.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return data;
  }

  dFSPreOrder() {
    let data = [];
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
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
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(this.root);
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
console.log(bst.dFSPreOrder());
