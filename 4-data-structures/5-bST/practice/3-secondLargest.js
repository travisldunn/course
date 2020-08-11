class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
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

secondLargest = (treeRoot) => {};

console.log(secondLargest(bst.root));
