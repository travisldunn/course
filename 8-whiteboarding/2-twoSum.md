# 203 - Two Sum

Given an array of integers and a target, return a pair of indices where the corresponding values in the array add up to the target.

```
Input: Array of Integers, Target Integer
Output: Two element Array of Integers
Example
Input: [1, 6, -5, 7, 3], -2      =>	Output: [2,4]
Input: [1, 9, 10], 8			=>	Output: [-1,-1]
```

# Constraints

```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```

If the target integer is not found return [-1, -1].

Values of the array can be positive or negative integers.


# Solution

* Create a hash table
* Loop through array
* For each element in array check if that key exists in the hash
	* If it does not exist, take the difference between n and the integer and add that as a key and the index as the value into the array and continue the loop
	* Otherwise if the key exists, return an array with the value found from the hash and the current index
* If it completes the loop without finding a match, return [-1, -1]


# Notes

The naive solution is O(N^2) time which takes every possible pair and compares the sum to the target value, however only uses O(1) space.  

This solution takes only O(N) time but increases the space to O(N) as well.

# Resources
[Two Sum on Leetcode] (https://leetcode.com/problems/two-sum/)
