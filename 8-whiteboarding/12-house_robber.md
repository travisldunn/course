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

# 208 - House Robber

A house robber has a map of houses and the amount of gold in each home.  The robber knows that if two adjacent homes are robbed, then the neighborhood security system will sound.  Determine the total amount of gold the robber can get without setting off the alarm.

```
Input: 	 Array of Nonnegative Integers
Output: 	Integer
```

# Example
```
Input: [1, 2, 3]				 =>	Output: 4
Input: [1, 2, 4, 1, 5, 12, 5]	=>	Output: 17

Explanation:
Knowing you can't rob from two adjacent houses
The maximum gold you can steal in each case:

Example 1
1 + 3 = 4

Example 2
1 + 4 + 12 = 17

```


# Constraints

```
Time Complexity: O(N)
Auxiliary Space Complexity: Intermediate O(N), Advanced O(1)
```

# Solution
This can be solved using tabulation (iteratively).

* 1) Instantiate a new ‘max’ array to hold the max gold that can be accumulated up to each house.
* 2) Loop through the input array with, i.
* 3) For each house, the max gold (max[i]) will be the greater of:
  * The previous house’s max
  * The max two houses back + the current house value
* 4) After the loop, return the last value in the max array

# Notes

Think about how you might be able to do this with just two variables instead of an additional array.

# Resources
[House Robber on Geeks for Geeks](https://leetcode.com/problems/house-robber/)
