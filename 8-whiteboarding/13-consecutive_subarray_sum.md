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

# 222 - Consecutive Subarray Sum

Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value.

```
Input: Array of integers, target value
Output: Boolean
```

# Example
```
Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
Input: [8,3,7,9,10,1,13], 50		=>	Output: false
```

# Constraints
```
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
```

All elements are positive

# Solution

* 1) Instantiate ‘current_sum’ equal to the first element
* 2) Instantiate ‘start’ as 0 as an index representing the start of the sum.
* 3) Loop through array starting from 1.
* 4) Add current value to ‘current_sum’.
  * a) If ‘current_sum’ exceeds the ‘target’ perform a while loop until ‘current_sum’ is less than or equal to ‘target’.
  * b) In the while loop subtract off the value at ‘start’ and then increment ‘start’
* 5) If ‘current_sum’ is equal to the target value, return true.
* 6) If the loop is completed without a matching sum, return false.

# Notes

Asked at Amazon and Facebook

# Resources

[Consecutive Subarray Sum on Geeks for Geeks](http://www.geeksforgeeks.org/find-subarray-with-given-sum/)
