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

# 213 - Longest Path of a Binary Tree

Given a binary tree node, return the number of nodes in the longest path between the root and a leaf node

```
Input: Node in a Binary Tree
Output: Integer
```

# Example
```
Input: <BSTNode 1> =>   Output: 3 (from path 1--> 3--> 4)     
```

![LongestPathBinaryTree](http://res.cloudinary.com/outco-io/image/upload/v1521248026/LongestPathBinaryTree.png)

# Constraints
```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```
Binary Tree Node has the following properties:
1) value (Integer)
2) left (Binary Tree Node, default null)
3) right (Binary Tree Node, default null)

# Solution

Use pure recursion.

* 1) If the `root` is null, return `0` (we've reached the end of a path)

* 2) Otherwise:
  * a) Store the `leftPath` as the result of `longestPath(root.left)`
  * b) Store the `rightPath` as the result of `longestPath(root.right)`


* 3) Return the `max` of `leftPath` and `rightPath` plus `1` (we're adding the current node to the path)


# Notes

Onsite whiteboarding question for Google (2016).

```javascript

// JavaScript Solution:

function longestPath(root) {
  if(root === null) return 0;
  let leftPath = longestPath(root.left);
  let rightPath = longestPath(root.right);
  return Math.max(leftPath, rightPath) + 1;
}

```
# Resources
[Maximum Depth of Binary Tree on Leetcode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
