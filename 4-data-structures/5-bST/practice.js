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
      if (val === current.val) return undefined;
      if (val < current.val) {
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

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      if (val < current.val) current = current.left;
      else current = current.right;
    }
    return -1;
  }

  contains(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return true;
      if (val < current.val) current = current.left;
      else current = current.right;
    }
    return false;
  }

  bFS() {
    const data = [],
      queue = [this.root];
    while (queue.length) {
      let { val, left, right } = queue.shift();
      data.push(val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    return data;
  }

  dFSLoop() {
    const data = [],
      stack = [this.root];
    while (stack.length) {
      let { val, left, right } = stack.pop();
      data.push(val);
      if (left) stack.push(left);
      if (right) stack.push(right);
    }
    return data;
  }

  dFSPreOrder() {
    const data = [];
    const recurse = ({ val, left, right }) => {
      data.push(val);
      if (left) recurse(left);
      if (right) recurse(right);
    };
    recurse(this.root);
    return data;
  }

  dFSInOrder() {
    const data = [];
    const recurse = ({ val, left, right }) => {
      if (left) recurse(left);
      data.push(val);
      if (right) recurse(right);
    };
    recurse(this.root);
    return data;
  }

  dFSPostOrder() {
    const data = [];
    const recurse = ({ val, left, right }) => {
      if (left) recurse(left);
      if (right) recurse(right);
      data.push(val);
    };
    recurse(this.root);
    return data;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(9);
bst.insert(8);
bst.insert(12);
bst.insert(77);

// bst.root.left.left = new Node(90);
// bst.insert(78);
// bst.insert(79);
// bst.insert(80);
// bst.insert(85);
// bst.insert(83);
// bst.insert(82);
// bst.insert(110);
// bst.insert(111);
// bst.insert(112);
// bst.insert(113);
// bst.insert(114);

// console.log(bst.bFS());
// console.log(bst.dFSLoop());
// console.log(bst.dFSPreOrder());
console.log(bst.dFSPreOrder());
// console.log(bst);

module.exports = bst;
