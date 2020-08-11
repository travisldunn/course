// # Binary Trees - Merge Binary Trees

// #### Prompt

// Given two binary trees, imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree.The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.Otherwise, the NOT null node will be used as the node of new tree.

// #### Examples
// Input: root1 { BinaryTreeNode }, root2 { BinaryTreeNode }

// Tree 1                     Tree 2

// 1                         2
//     / \                       / \
// 3   2                     1   3
//     /                           \   \
// 5                             4   7

// Output: { BinaryTreeNode }

// Merged tree:
// 3
//     / \
// 4   5
//     / \   \
// 5   4   7

// #### Constraints
// Time Complexity: O(N)
// Space Complexity: O(N)

// The merging process must start from the root nodes of both trees.

// #### Resources

// [Binary Tree Traversals](http://www.ida.liu.se/opendsa/OpenDSA/Books/TDDD86_2014/html/BinaryTreeTraversal.html)

//     #### Hints

// 1. How can you traverse through both trees at the same time?
// 2. What happens when one of the nodes is null/None?
// 3. How can you break this problem into two smaller problems ? ie.When should you merge, and when should you copy ?

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);
root1.left.left.right = new TreeNode(1);

let root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

function mergeTrees(node1, node2) {
  // Case 1: Neither is null
  if (node1 !== null && node2 !== null) {
    let newNode = new TreeNode(node1.val + node2.val);
    newNode.left = mergeTrees(node1.left, node2.left);
    newNode.right = mergeTrees(node1.right, node2.right);
    return newNode;
  }
  // Case 2: 1 or more is null
  if (node1 === null) {
    return copyTree(node2);
  }
  if (node2 === null) {
    return copyTree(node1);
  }
}

function copyTree(node) {
  if (node === null) {
    return null;
  }
  let newNode = new TreeNode(node.val);
  newNode.left = copyTree(node.left);
  newNode.right = copyTree(node.right);
  return newNode;
}

let root3 = mergeTrees(root1, root2);
