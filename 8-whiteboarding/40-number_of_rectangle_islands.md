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

# 306 - Number of Rectangle Islands

Given a rectangular `matrix` containing only the values “0” and “1”, where the values of “1” always appear in the form of a rectangular island and the islands are always separated row-wise and column-wise by at least one line of “0”s, count the number of islands in the given matrix.  Note that the islands can diagonally adjacent.
```
Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all rectangular islands
```

# Example
```
Input: [[1, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 0],
        [0, 0, 1, 0]]

Output: 3

Input: [[1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 0, 1]]

Output: 3

```
# Constraints
```
Time Complexity: O(MN)
Auxiliary Space Complexity: O(1)
```

The islands are all rectangular and the islands are always separated row-wise and column-wise by at least one line of `0`s.

# Solution

Key insight: You only need to count the number of **top-left corners** of the islands.

Because for each distinct rectangular island, there is always EXACTLY 1 top left corner.

To test for a top left corner:

If you find a cell with a `1` in it, and the cells directly above and directly to the left of that cell are either `0` or off the matrix, then you have a top-left corner.

* 1) Create islandCount integer to count number of rectangle islands and initialize it to `0`

* 2) Iterate through the `matrix`

* 3) If current cell is `1` then check to see if cell directly above and to the left is a `1`

  * a) If yes, continue to next cell

  * b) If no, add one to our rectangle island `count`

* 4) Return `islandCount`


```javascript
function rectangleIslands(matrix) {
  let total = 0;

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 1 &&
        ((i - 1) < 0 || matrix[i - 1][j] === 0) &&
        ((j - 1) < 0 || matrix[i][j - 1] === 0) ) {
        total++;
      }
    }
  }
  return total;
}

```

# Resources

[Count Rectangle Islands on Geeks for Geeks](http://www.geeksforgeeks.org/count-number-islands-every-island-separated-line/)
