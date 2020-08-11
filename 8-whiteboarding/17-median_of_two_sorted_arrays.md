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

# 403 - Median of Two Sorted Arrays

Given two sorted arrays of integers of the same length, determine the median of the combined sorted array.

The **median** of an array of sorted numbers corresponds to the **middle element**, if the array has an odd number of elements, and the **average** of the **two middle elements** if the array has an even number of elements.

```
Input: Two Arrays of Integers
Output: Integer
```

# Example

```
Input:  	[1, 12, 13, 26, 38], [2, 15, 17, 30, 45]
Output:	16
(because the median of [1, 2, 12, 13, 15, 17, 26, 30, 38, 45] equals 16)
```

# Constraints
```
Time Complexity: (Intermediate) O(N), (Advanced) O(log(N))
Auxiliary Space Complexity: O(1).
```
# Solution

### Intermediate
* 1) Create two indices `i` and `j` and initiate them at zero

* 2) Similar to “merging two sorted arrays” compare the to find the lower value between `arr1[i]` and `arr2[j]`.

* 3) Increment up either `i` or `j` depending on which one is pointing to the lower value

* 4) Repeat for `N` elements, keeping track of the current `largest`, and `second_largest` element.

* 5) Take the average of the `largest` element and `second_largest` element `N-1` and return that value.

### Advanced
Find the median of both arrays separately
```
		 ↓
                              ↓
[1, 12, 13, 26, 38], [2, 15, 17, 30, 45]
```

* 1) If the values are the same then, return that value

* 2) If the median of array 1 is smaller than array 2, apply “divide and conquer” to focus on the larger half of array 1 and smaller half of array 2 (vice versa if the median of  array 1 is larger).

* 3) Take the median of the new subarrays and repeat steps 1. through 3. until there are only 2 items in each array

```
     ↓		 
                      ↓
[13, 26, 38], [2, 15, 17]
(take upper half of arr1 and lower of arr2)
```

* 4) Finally, when there are only two items left in each array, zip the elements of each array together and take the average of the second and third elements

```
[13, 26], [15, 17]  => [13, 15, 17, 26] => (15+17)/2 = 16
```

# Notes

In some cases, when there are two elements left, you will pick an element from each array to compute the median.

In other cases, both elements will be picked from the same array.

Can you think of why?


# Resources

[Median of Two Sorted Arrays on Geeks for Geeks](http://www.geeksforgeeks.org/median-of-two-sorted-arrays/)
