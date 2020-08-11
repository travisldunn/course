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

# 301 Matrix Spiral
Given an (MxN) `matrix `of integers, return an array in spiral order.

```
Input: Array of integers
Output: Array of integers
```

# Example

```
Input: [[1,2,3],			
        [4,5,6],
        [7,8,9]]

Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]



Input: [[]]

Output: []
```
# Constraints
```
Time Complexity: O(MN)
Auxiliary Space Complexity: O(MN)
```

Values of the array will be digits 0-9.


# Notes

Must account long or tall matrices:

```
Input: [[1,2,3,4]]

Output: [1, 2, 3, 4]
```


TripleByte has asked this problem on their final round.

# Solution

* 1) Create a max and min for the X and Y coordinates.

* 2) While `X min <= X max` and `Y min < Y max`, perform 4 loops adding values into a `results` array:

  * a) Loop through the top row and increment `Y min`

  * b) Loop through the last column and decrement `X max`

  * c) Loop through the bottom row and then decrement `Y max`

  * d) Loop through the first column and then increment `X min`

* 3) Once the while loop breaks, return the result array.


```javascript
//Javascript Solution
function MatrixSpiral(matrix) {
    if(!matrix.length) {return []; }
    var yMin = 0;
    var xMin = 0;
    var yMax = matrix.length - 1;
    var xMax = matrix[0].length - 1;
    var results = [];

    while (xMin <= xMax && yMin <= yMax) {
        for(var i = xMin; i <= xMax; i++){
            results.push(matrix[yMin][i]);
        }
        yMin++;
        for(i = yMin; i <= yMax; i++){
            results.push(matrix[i][xMax]);
        }
        xMax--;
        if(yMin <= yMax){
            for(i = xMax; i >= xMin; i--){
                results.push(matrix[yMax][i]);
            }
            yMax--;
        }
        if(xMin <= xMax){
            for(i = yMax; i >= yMin; i--){
                results.push(matrix[i][xMin]);
            }
            xMin++;
        }
    }
    return results;
};
```



# Resources

[Spiral Matrix on Leetcode](https://leetcode.com/problems/spiral-matrix/)
