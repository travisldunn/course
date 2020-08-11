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

# 216 - Lowest Common Ancestor

Given the root node of a binary tree and two distinct values, find the lowest common ancestor.

```
Input: Root Node, Two Integer Values
Output: Integer Value of Lowest Common Ancestor
```

# Example

Input: root, 4, 9      	=>	Output: 7
![LowestCommonAncestor](http://res.cloudinary.com/outco-io/image/upload/v1521248026/LowestCommonAncestor.png)


# Constraints
```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```
Integer values of nodes are all distinct.

Binary Tree Node has the following properties:
1) `value` (Integer)
2) `right` (Binary Tree Node, default null)
3) `left` (Binary Tree Node, default null)

# Solution

 * 1) Perform a tree traversal to find/collect the path to the first node.  

    * Place values of the path into an array (e.g., `[5, 7, 4]`)

 * 2) Perform a tree traversal to find/collect the path to the second node.

    * Place values of the path into second array (e.g., `[5, 7, 8, 9]`)

 * 3) Iterate through both path arrays and compare the values.

 * 4) Return the last matching value. (e.g., return `7`)

# Notes
Facebook technical screen problem

```javascript
function LowestCommonAncestor (root, num1, num2) {
  let result = -1;

  let arr1 = [];
  let arr2 = [];

  let path = [];

  function ancestorPath (node) {
    if(node === null) {
      return;
    }
    path.push(node.value);

    if(node.value === num1) {
      arr1 = path.slice();
    }

    if(node.value === num2) {
      arr2 = path.slice();
    }

    ancestorPath(node.left);
    ancestorPath(node.right);
    path.pop();
  }

  ancestorPath(root);


  let i = 0;

  while(arr1[i] === arr2[i]) {
    result = arr1[i];
    i++;
  }

  return result;
}


```


```python

# Alternate pure recursion approach in python

def lowest_common_ancestor(root, a, b):                                                              
    if root is None:                                    
        return                                          
    if root.value == a or root.value == b:              
        return root                                     
    left = lowest_common_ancestor(root.left, a, b)      
    right = lowest_common_ancestor(root.right, a, b)    
    if left and right:                                  
        return root                                     
    elif left and not right:                            
        return left                                     
    elif right and not left:                            
        return right                                    
    else:                                               
        return     

```   

# Resources
http://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/
