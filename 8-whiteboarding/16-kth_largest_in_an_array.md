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

# 309 - Kth Largest in an Array

Given an `array` of integers and a number `K`, find the `Kth` largest value in the array.
```
Input: Array of integers and an Integer
Output: Integer
```

# Example
```
Input: [3, 1, 6, 4, 9, 8], 3     =>	Output: 6
Input: [1, 9, 5, 3], 1		=>	Output: 9
```
# Constraints
```
Time Complexity: Average O(N), Worst O(N^2)
Auxiliary Space Complexity: Worst O(1)
Total Space Complexity: Average O(log(N)), Worst O(N)
```

**Note:** The time and space constraints above represent the average, not worst cases.

# Solution

Perform a Quickselect which is similar to Quicksort combined with a binary search:

* 1) Pick a pivot point to separate the array into two parts
  * a) Those elements greater than the pivot to the right of it
  * b) Those elements less than the pivot to the left of it
  * c) The pivot in its correct position separate
* 2) This can be done in place through swapping elements just like quicksort

* 3) Evaluate the if the pivot **`index`** is the `Kth` value from the end of the array
* 4) If so, return the **`value`** at the pivot **`index`**
* 5) Otherwise
  * a) Recurse or iterate over the `left` portion of the array if the pivot **`index`** is **larger** than `K`.
  * b) Recurse or iterate over the `right` portion of the array if the pivot **`index`** is **smaller** than `K`


# Code
```python
def kth_largest_iterative(k, arr):
    # {{{
    start = 0
    end = len(arr) - 1
    answer = len(arr) - k
    while (start <= end):
        left = start
        right = end
        pivot = end
        while(left < right):
            while (arr[left] < arr[pivot] and left < right):
                left += 1
            while (arr[right] >= arr[pivot] and right > left):
                right -= 1
            arr[left], arr[right] = arr[right], arr[left]
        arr[left], arr[pivot] = arr[pivot], arr[left]
        if left == answer:
            return arr[answer]
        if left < answer:
            start = left + 1
        else:
            end = left - 1

    return None

  from math import inf
def kth_largest_recursive(k, arr):
    # {{{

    ultimate_index = len(arr) - k
    found_value = None

    def quickselect(start, end):
        nonlocal ultimate_index
        nonlocal found_value

        recurse_left, recurse_right = inf, inf

        if start == end:
            found_value = arr[start]
            return
        if start > end: return
        pivotindex = end
        wall = start
        for index in range(start, end):
            if arr[index] <= arr[pivotindex]:
                arr[index], arr[wall] = arr[wall], arr[index]
                wall += 1
        arr[wall], arr[pivotindex] = arr[pivotindex], arr[wall]
        if wall == ultimate_index:
            found_value = arr[ultimate_index]
            return
        if wall < ultimate_index:
            quickselect(wall + 1, end)
        if wall > ultimate_index:
            quickselect(start, wall - 1)

    quickselect(0, len(arr) - 1)
    return found_value

```

# Notes

The naive way would to perform a sort and then access the Kth value from the end of the array. However, this is `O(NlogN)` time complexity.

# Resources

[Kth Smallest/Largest Element in an Unsorted Array on Geeks for Geeks](http://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/)

[Quickselect on Wikipedia](https://en.wikipedia.org/wiki/Quickselect)
