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

# 214 - Invert a Binary Tree

Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

```
Input: Node in a Binary Tree
Output: Node in a Binary Tree
```

# Example

Input:
![InvertBinaryTree1](http://res.cloudinary.com/outco-io/image/upload/v1521248026/InvertBinaryTree1.png)


Output:
![InvertbinaryTree2](http://res.cloudinary.com/outco-io/image/upload/v1521248026/InvertBinaryTree2.png)

# Constraints
```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```
Binary Tree Node has the following properties:
1) value (Integer)
2) left (Binary Tree Node, default null)
3) right (Binary Tree Node, default null)

Must swap the entire node instances, not just their values

# Solution

1) Use Pure Recursion to solve this problem. Our only input is `node`.

    * For the base case, if input `node` is null, return `null`, otherwise, swap the `left` and `right` child.

    * Use a temp variable if necessary.

    * Call the function recursively on both the `node.left` and `node.right`.

2) Return the input `node`.


# Notes

The creator of homebrew couldn't solve this problem in a Google Interview:
https://twitter.com/mxcl/status/608682016205344768



```python

# Python Solution:

def invert_tree(node):                                                                            
    if node is None:                                   
        return                                         
    invert_tree(node.left)                             
    invert_tree(node.right)                            
    node.right, node.left = node.left, node.right      
    return node                                        

```
# Resources
https://leetcode.com/problems/invert-binary-tree/
