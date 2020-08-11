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

# 500 - Edit Distance

Given two words: _word1_ and _word2_, find the minimum number of operations required
to convert _word1_ to _word2_.

You have the following 3 operations permitted on a word:

1. Insert a character
2. Delete a character
3. Replace a character  


```
Input: 	 String
Output:  Int
```

# Example
```
Input 1:  "horse", "ros"   
Output 1: 3 (horse --> rorse, rorse --> rose, rose --> ros)  

Input 2:  "a", "" 	           
Output 2: 1 ("a" --> "")   

```


# Constraints

```
Time Complexity: O(M * N) with M being the length of word1, and N being the length of word2.
Auxiliary Space Complexity: O(M * N)     
```


# Solution
This can be solved using tabulation (iteratively).

* 1) Initialize a distances matrix with rows representing each character of word 2, and cols representing each character of word 1 (or vice versa).
* 2) Create variables for the last row and the last column (representing an empty string). Populate the bottom right corner of the matrix with a 0.  
![First Iteration](https://res.cloudinary.com/outco-io/image/upload/v1540333801/first_iteration.png)
* 3) Populate the last row based in the number of characters you would have to delete from word 1 to result in an empty string.  
![Second Iteration](https://res.cloudinary.com/outco-io/image/upload/v1540333801/second_iteration.png)
* 4) Populate the last column based on the number of characters you would have to delete from word 2 to result in an empty string.  
![Fourth Iteration](https://res.cloudinary.com/outco-io/image/upload/v1540333801/fourth_iteration.png)
* 5) Populate the rest of the matrix. Compare the minimum number of deletions across editing a character from word 1 (skipping the col), editing a character from word 2 (skipping the row), and skipping both characters from replacing one of them (skipping the row and col). Be sure to add one to which one you choose to keep track of edits!

        An edge case exists that if two characters from the row and column match, you don't need to perform any edits, and can just take the edits from skipping the row and the column (both the same characters).  
![Fifth Iteration](https://res.cloudinary.com/outco-io/image/upload/v1540333801/fifth_iteration.png)
* 6) After exiting the loops for populating the matrix, return the number of edits in the matrix at the top left corner.  
![Sixth Iteration](https://res.cloudinary.com/outco-io/image/upload/v1540333801/sixth_iteration.png)

# Code Solution

```python
def edit_distance(word1, word2):
  distances = [[0] * (len(word1) + 1) for i in range(len(word2) + 1)]

  last_row = len(distances) - 1
  last_col = len(distances[0]) - 1

  distances[last_row][last_col] = 0

  for col in range(last_col):
    distances[last_row][col] = len(word1) - col

  for row in range(last_row):
    distances[row][last_col] = len(word2) - row


  for row in range(last_row - 1, -1, -1):
    for col in range(last_col - 1, -1, -1):
      if word2[row] == word1[col]:
        distances[row][col] = distances[row + 1][col + 1]
      else:
        distances[row][col] = 1 + min(distances[row + 1][col + 1], distances[row + 1][col], distances[row][col + 1])
  return distances[0][0]

```


# Resources
[Edit Distance!](https://leetcode.com/problems/edit-distance/discuss/)
