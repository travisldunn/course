# 201 - Plus One

Given a positive integer represented by an array of digits, add one that number.

```
Input: Array of integers
Output: Array of integers

```

# Example 

```
Input: [1,2,3]  =>	Output: [1,2,4]
Input: [1, 9]	=>	Output: [2,0]
Input: [9,9,9]  =>  Output: [1,0,0,0]
```

# Constraints

```
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
```

The input array will be represent with the largest digit down to the ones digit at the last index.

Values of the array will be digits 0-9.

Must account for adding an extra digit if all digits are 9’s

# Solution

* 1) Loop backwards in the array
* 2) If current digit is between 0 and 8, add one to that digit and return the array
* 3) Else if digit is a 9, replace it with a 0 and continue
* 4) Outside the loop, insert a 1 to the beginning of the array and return
	*	Step 4. will only occur if the loop completes without triggering the Step 2. condition.
Notes


This is a common first round technical screen question for Google.

# Resources
[Plus One on Leetcode](https://leetcode.com/problems/plus-one/)
