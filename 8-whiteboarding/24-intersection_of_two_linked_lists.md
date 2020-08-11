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

# 217 - Intersection of Two Linked Lists

Write a function to find the node at which the intersection of two singly linked lists begins.

If there is no intersection between the two nodes, simply return `null`.


```
Input:  headA {ListNode}, headB {ListNode}
Output: {ListNode} or null
```
# Example
```
Input: 	a1, b1


A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3


Output:	c1



Input:  a1, b1

A:          a1 → a2


B:     b1 → b2 → b3


Output: null
```
# Constraints

```
Time Complexity: O(N)

Auxiliary Space Complexity: O(1)
```

Each `ListNode` has the following properties:

```
ListNode {
  val : Integer
  next: null/ListNode
}
```

# Solution

There are two solutions, both of which fulfill the time and space constraints. The **intermediate** one involves finding the length of both `Linked Lists` and the **advanced** which does not.

#### Intermediate

* 1) Loop through both `lists` starting from their `heads`, and calculate their respective lengths.
* 2) Once you have both lengths, find the difference between the two lengths.
* 3) Use the difference you computed to iterate forward on the longer list and choose that node as your new starting point
* 4) Iterate through both lists simultaneously until both pointers are equal
* 5) The pointers will either both equal the point of intersection or they will both equal `null`

#### Advanced

* 1) Initialize two pointers, `currentA` and `currentB`, and set them equal to `headA` and `headB` respectively.
* 2) Create a `while` loop, that runs when `currentA` is NOT equal to `currentB`.
* 3) Within that `while` loop,
 * a) if `currentA` is `null`, set it to be `headB`
 * b) if `currentB` is `null`, set it to be `headA`
 * c) set `currentA` to `currentA.next`
 * c) set `currentB` to `currentB.next`
* 4) Return either `currentA` or `currentB`


This solution works because the `while` loop will break when both `currentA` and `currentB` are equal. If there is no intersection they'll both be `null`, and if there is, they will both equal the intersection node.

# Code

```javascript
// Advanced Solution
function getIntersectionNode(headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while(currentA != currentB) {
    currentA = currentA ? currentA = currentA.next : headB
    currentB = currentB ? currentB = currentB.next : headA
  }
  return currentA;

}
```

# Resources

[Intersection of Two Linked Lists on Leetcode](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)
