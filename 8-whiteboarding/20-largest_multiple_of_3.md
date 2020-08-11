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

# 502 - Largest Multiple of 3

Given an array of digits (contain elements from 0 to 9), find the
largest number that can be made from some or all digits of array and is divisible
by 3.

** Only give the below information _if_ interviewee asks:

The same element may appear multiple times in the array, but each
element in the array may only be used once.

If it's not possible to form an integer that is divisible by 3, return -1.

```
Input: Array of Integers  
Output: Integer
```

# Example

```
Input 1: arr[] = [5, 4, 3, 1, 1]
Output 1: 4311

Input 2: arr[] = [5, 5, 5, 7]
Output 2: 555

Input 3: arr[] = [3, 3, 1, 6]
Output 3: 633 

Input 4: arr[] = [9, 1, 5]
Output 4: 951 

Input5: arr[] = [0, 5]
Output 5: 0

Input6: arr[] = [2, 2]
Output6: -1 
```

# Constraints
```
Time Complexity: O(N)
Space Complexity: O(1)
```
# Solution

* Create a counts array that contains indices from 0 - 9, and stores frequencies
  of each digit.
* Calculate the remainder of the sum of digits when dividing by 3.
* If the remainder is 0, we can use all the digits! Convert the counts array into a reverse sorted integer
* Loop through the counts array (0 - 9) and check the count of each number
* If the remainder of the sum of digits is greater than 0, the logic is divided into two parts:
*   If the remainder is 1
    * The moment you find a number that has a remainder of 1, decrement the frequency of that
      number from the counts array and convert the counts array into a reverse sorted integer.
    * If you find a number that has a remainder of 2, store it into a temp variable. You would need
      two integers with a remainder of 2 to remove a remainder of 1. Store the second one in another temp variable.
      This is because `(2 + 2) = 4 % 3 = 1`.  
*   If the remainder is 2
    * The moment you find a number that has a remainder of 2, decrement the frequency of that
      number from the counts array and convert the counts array into a reverse sorted integer
    * If you find a number that has a remainder of 1, store it into a temp variable. You would need
      two integers with a remainder of 1 to remove a remainder of 2. Store the second one in another temp variable.
      This is because `(1 + 1) = 2 % 3 = 1`.  
* If you go through the loop without finding the lowest number with a remainder of 1 or 2, decrement the frequencies
  of the numbers in the temp variables from the counts array and convert the counts array into a reversed sorted integer.
* Return -1 if you do not find any solution.

# Code

```python
def largest_multiple_of_3(digits):

    def create_counts_array(digits):
        counts = [0] * 10
        for digit in digits:
            counts[digit] += 1

        return counts

    def convert_array_to_int(counts, nums):
        for num in nums:
            counts[num] -= 1
        power = 0
        integer = 0
        for i in range(10):
            count = counts[i]
            while count > 0:
                integer += i * (10 ** power)
                power += 1
                count -= 1
        return integer

    counts = create_counts_array(digits)
    remainder = sum(digits) % 3

    if remainder == 0: return convert_array_to_int(counts, [])

    rem_2 = [-1, -1]
    rem_1 = [-1]

    for i in range(10):
        count = counts[i]
        while count > 0:
            if remainder == 1:
                if i % 3 == 1:
                    rem_1[0] = i
                    return convert_array_to_int(counts, rem_1)
                if i % 3 == 2:
                    if rem_2[0] != -1:
                        rem_2[0] = i
                    elif rem_2[1] != -1:
                        rem_2[1] = i
            if remainder == 2:
                if i % 3 == 2:
                    rem_1[0] = i
                    return convert_array_to_int(counts, rem_1)
                if i % 3 == 1:
                    if rem_2[0] != -1:
                        rem_2[0] = i
                    elif rem_2[1] != -1:
                        rem_2[1] = i
            count -= 1

    if rem_2[0] != -1 and rem_2[1] != -1:
        return convert_array_to_int(counts, rem_2)
    
    return -1 
```

# Notes

1. An integer is divisible by 3 if the sum of its digits is divisible by 3
2. If an integer is not divisible by 3, then it contains a remainder of 1 or 2 when dividing by 3.

# Resources

[Geekforgeeks.com](https://www.geeksforgeeks.org/find-largest-multiple-3-array-digits-set-2-time-o1-space/)
