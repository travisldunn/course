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

# 406 - Trapping Rain Water

Given an array of integers representing the elevations of rocks, determine the total amount of water that can be trapped between rocks.

```
Input: 	 Array of integers
Output: 	Integer
```

# Example

![rainwater](http://res.cloudinary.com/outco-io/image/upload/v1520892740/rainwater.png)

```
Input: [3, 0, 2, 0, 4]      
Output: 7
```


# Constraints

```
                                 Advanced			 Insane
Time Complexity:			        O(N)				O(N)
Auxiliary Space Complexity: 		O(N)				O(1)
```

# Solution
* 1) Instantiate an integer total to track rain water.
* 2) Create an array called max_left to track the maximum height to the left of each index, and populate that array.
  * The example above would be: [0, 3, 3, 3, 3]
* 3) Also create an array called max_right to track the maximum height to the right of each index, and populate that array
  * The example above would be: [4, 4, 4, 4, 0]
* 4) Loop through the input array with index i
At each index, subtract the current value from the lower of the left_max and right_max
If the result is greater than zero, add it to the total
Return total at the end.


# Resources
[Trapping Rainwater on Geeks for Geeks](http://www.geeksforgeeks.org/trapping-rain-water/)
