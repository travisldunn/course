class Node {}

class BinarySearchTree {
  constructor() {}

  insert(value) {}

  find(value) {}

  contains(value) {}

  bFS() {}

  dFSLoop() {}

  dFSPreOrder() {}

  dFSPostOrder() {}
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

/*
 *  Target Practice 07 - BST Traversal
 */

("use strict");

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
  if (arr.length === 0) {
    return null;
  }
  let root = new TreeNode(arr[0]);
  let queue = [root];
  for (let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
}

/**
 *
 * Deserialize operates by building out the tree in a breadth-first
 * manner. One only needs to build down to the lowest row where there
 * exists nodes. For example, in this tree,
 *
 *          1
 *            \
 *              3
 *   				  /
 *   				 2
 *
 * The array that you would pass in to the deserialize function would
 * be [1,null,3,2,null]. The first null represents the left child of
 * the 1 node, and the second null represents the right child of the 3 node.
 *
 *  1. Here, we have built out the following tree using deserialize:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */

// DO NOT EDIT
const arr = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];

const sampleTree = deserialize(arr);

/**
 *  2. Given the example output binary search tree from Problem 1, what would
 *     the order of values printed be if we used:
 *
 *     a. BREADTH FIRST traversal: [4,2,5,1,3,7,6,8]
 *     b. PRE-ORDER DEPTH first traversal: [4,2,1,3,5,7,6,8]
 *     c. IN-ORDER DEPTH first traversal: [1,2,3,4,5,6,7,8]
 *     d. POST-ORDER DEPTH first traversal: [1,3,2,6,8,7,5,4]
 */

/**
 *  3a. Using a queue and while loop write a function that takes the root of a
 *      binary tree node and outputs an array of values ordered by BREADTH
 *      FIRST.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *  NOTE: You may use an array or linked list for your queue.
 *  NOTE: Confirm with your answer from Problem 2a.
 */

function bfs(node) {
  if (node === null) {
    return [];
  }
  let result = [];
  let queue = [node];
  let current;

  while (queue.length > 0) {
    current = queue.shift();
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
    result.push(current.value);
  }

  return result;
}

/*
 *  3b. Using recursion, write a function that takes in a tree node and outputs
 *      an array of values ordered by PRE-ORDER DEPTH FIRST traversal.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *      NOTE: Confirm with your answer from problem 2b.
 */
function dfsPre(node) {
  let result = [];

  function traverse(current) {
    if (current === null) {
      return;
    }
    result.push(current.value);
    traverse(current.left);
    traverse(current.right);
  }

  traverse(node);
  return result;
}

/**
 *  3c. Using recursion, write a function that takes in a tree node and outputs
 *      an array of values ordered by IN-ORDER DEPTH FIRST traversal.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *      NOTE: Confirm with your answer from problem 2b.
 */
function dfsIn(node) {
  let result = [];

  function traverse(current) {
    if (current === null) {
      return;
    }
    traverse(current.left);
    result.push(current.value);
    traverse(current.right);
  }

  traverse(node);
  return result;
}

/**
 *  3d. Using recursion, write a function that takes in a tree node and outputs
 *      an array of values ordered by POST-ORDER DEPTH FIRST traversal.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *      NOTE: Confirm with your answer from problem 2d.
 */
function dfsPost(node) {
  let result = [];

  function traverse(current) {
    if (current === null) {
      return;
    }
    traverse(current.left);
    traverse(current.right);
    result.push(current.value);
  }

  traverse(node);
  return result;
}
