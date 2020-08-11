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

function isBalanced(treeRoot) {
  // A tree with no nodes is superbalanced, since there are no leaves!
  // We short-circuit as soon as we find more than 2
  // Nodes will store pairs of a node and the node's depth
  // Pop a node and its depth from the top of our stack
  // Сase: we found a leaf
  // We only care if it's a new depth
  // Two ways we might now have an unbalanced tree:
  //   1) More than 2 different leaf depths
  //   2) 2 leaf depths that are more than 1 apart
  // Case: this isn't a leaf - keep stepping down
}

// console.log(isBalanced(bst.root));
