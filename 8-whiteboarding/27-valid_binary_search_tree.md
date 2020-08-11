# Tell Me About Yourself

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about yourself"

##### Do you hear these things?

1. Who the interviewee is (interviewee's one liner)

2. How the interviewee became who they are (short statement about why they became a software engineer with a specific story)

3. Their Pitch (why this company). This has 2 sub-parts and includes:

  - Why they are qualified - Did they share a couple
  **specific** highlights about their applicable expertise

  - Why this company - Did they share **specific** reasons
  why they are interested in the company/position
  (showcasing aligned values/mission) and how they plan to
  add value to the team, product, service, mission, etc

# 215 - Valid Binary Search Tree

Given a binary tree root node, check if the tree is a valid binary search tree.

```
Input: Node in a Binary Tree
Output: Boolean
```

# Example

Input:
![ValidBinarySearchTree](http://res.cloudinary.com/outco-io/image/upload/v1521248026/ValidBinarySearchTree.png)

Output: False

# Constraints
```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```
Binary Tree Node has the following properties:
1) value (Integer)
2) right (Binary Tree Node, default null)
3) left (Binary Tree Node, default null)

# Solution

* 1) Use Helper Method Recursion

* 2) Store an `array` in the outer function's scope.

* 3) Perform an in-order depth first traversal, pushing each `node`'s values into the `array`.   

* 2) Check to see if the array is sorted in ascending order.


```javascript
function isBST(root) {
  let result = []

  function dfsInOrder(node) {
    if(node === null) return;
    dfsInOrder(node.left);
    result.push(node.val);
    dfsInOrder(node.right);
  }

  dfsInOrder(root)

  for(let i = 1; i < result.length; i++) {
    if(result[i] < result[i - 1]) {
      return false;
    }
  }
  return true;
}
```


# Resources
https://leetcode.com/problems/validate-binary-search-tree/
