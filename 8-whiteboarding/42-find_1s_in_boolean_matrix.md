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

# 313 - Find 1’s in Boolean Matrix

Given a `matrix` with `N` rows and `M` columns where elements in the matrix can be either `1` or `0` and each row and column are sorted in ascending order, find the number of `1`s.

```
Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all 0’s in the matrix
```

# Example
```
Input: [[0, 0, 0, 1],
		[0, 0, 1, 1],
		[0, 1, 1, 1],
		[0, 1, 1, 1]]

Output: 9
```
# Constraints
```
Time Complexity: O(N + M)
Auxiliary Space Complexity: O(1)
```
Each row and column of the matrix is sorted in ascending order.

Values of the matrix will be either `0` or `1`.

# Solution

Key insight: You don't need to traverse over every cell in the matrix.

This uses tthe fact that they rows AND columns are sorted in ascending order.

This means the ones will all be pushed to the RIGHT and BOTTOM of the matrix.

So you can just traverse along the "diagonal" boundary between the ones and zeros.

And add up the difference bewteen the length of the matrix and the current row index

![1s in Boolean Matrix](https://res.cloudinary.com/outco-io/image/upload/v1537401664/1s_in_Boolean_Matrix_1.png)

![1s in Boolean Matrix](https://res.cloudinary.com/outco-io/image/upload/v1537401666/1s_in_Boolean_Matrix_2.png)



* 1) Initialize 3 variables, `row`, `column`, `sum`

  * a) Set `column` equal to `matrix[0].length - 1`

  * b) Set `sum` equal to `0`

  * c) Set `row` equal to `0`

* 2) Starting at the top right corner of the matrix run a loop for `row` less than the total number of rows in `matrix` (`matrix.length`)

  * a) While the cell at `matrix[row][column]` is a `1`

    * i) Add the difference between the `matrix.length` and `row` to `sum`

    * ii) Decrement `column`

* 3) Return `sum`


```javascript
function CountOnes(matrix) {
  let column = matrix[0].length - 1;
  let sum = 0;
  for(let row = 0; row < matrix.length; row++){
    while(matrix[row][column] === 1){
      sum += (matrix.length - row);
      column--;
    }
  }
  return sum;
}

// Tests
// console.log(CountOnes([[0,0,1],[0,1,1],[1,1,1]]));
// 6
// console.log(CountOnes([[1,1,1],[1,1,1],[1,1,1]]));
// 9
// console.log(CountOnes([[0,0,1],[0,0,1],[0,0,1]]));
// 3
```

# Notes

Onsite whiteboarding question for Google (2016).
