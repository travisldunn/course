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

# 260 - Connect N Ropes with Minimum Cost

Given `n` ropes of different lengths represented by an array of integers, connect them all into a single rope in a way that minimizes the **cost** of connecting them.

The cost of connecting two ropes is equal to `sum` of their `lengths`. We want to minimize the cost of connecting **all the ropes**.


```
Input: ropes, [Integer]
Output: Integer
```

# Example

```
In: [4, 3, 2, 6]
Out: 29


Explanation:

First we connect 3 + 2 = 5
Then we connect 5 + 4 = 9
Then we connect 9 + 6 = 15

So in total the cost for the most efficient approach is: 29

A less efficient way would be:

First we connect 4 + 6 = 10
Then we connect 10 + 3 = 13
Then we connect 13 + 2 = 15

So in total the cost for the less efficient approach is: 38

Although in both cases we need to make the same number of connections, the costs are different

```


# Constraints
```
Intermediate:
Time Complexity: O(N log N)
Auxiliary Space Complexity: O(N)

Advanced:
Time Complexity: O(N log N)
Auxiliary Space Complexity: O(1)

N = # of Ropes

```

Input will always contain positive integers.

# Hints for Interviewer

Think about where a minHeap might fit into all this.

What other examples can we try?

Why do some ways of adding ropes together lead to larger output?

What's causing that?

What two elements would we always want to add together.


# Solution


### Intermediate

High Level Idea:

Add all the elements into a minHeap.

Add the two smallest together, and then bubble the resulting value down.

Continue until you only have a single element in the heap.


### Advanced

Same as intermediate, except we do it with the original array, saving space.


* 1) Create a min heap of size `n` with all the ropes in it.

* 2) Find the two smallest elements.

* 3) Add the two together at the top of the minHeap.

* 4) Bubble down the **top** element of the minHeap to it's correct position

* 5) Then **remove** the top of the minHeap (which should be the larger of two smallest elements at this point)

* 6) Do that by swapping it with the **last element** and removing it, then bubbling down the new **top element**.

* 7) Repeat steps `2`-`6` until only a single element, then return it. 


# Resources
[Connect N Ropes on Geeks for Geeks](https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/)

# Code

```javascript
// Coming Soon
```
