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

# 232 - Balanced Parens Permutations (Hard)

Given a positive integer `n`, return all the permutations of `n` pairs of balanced parenthesis.


```
Input: n (Integer)
Outout: [Str] (Array of Strings)
```

# Example

```
Input: 1
Output: ["()"]

Input: 2
Output: ["(())", "()()"]

Input: 3
Output: ["((()))", "(())()", "(()())", "()(())", "()())"]
```

# Constraints

```
Time: O(2^N)
Auxiliary Space Complexity: O(2^N)
```

The order of the strings in the array does not matter, as long as they are valid.

Use recursion to solve this problem.

# Solution

*Key Insight*

Notice when you **HAVE TO** use open parenthesis, and when you **CAN** use open parenthesis.

Notice when you **HAVE TO** use closed parenthesis, and when you **CAN** use closed parenthesis.

That will dictate what kind of recursive calls you can perform at different points.

To use a closed parenthesis, you must have used at least one more open beforehand.

You can always used an open parenthesis if it's available (you haven't used all of them).


* 1) Initialize an empty `results` array
* 2) Initialize a helper method that takes in three arguments:
  * a) `str`, a string represneting the permutation you are building up.
  * b) `left`, representing the number of left parenthesis remaining.
  * c) `right`, representing the number of right parenthesis remainig.
* 3) In the helper method.
  * a) If both `left` AND `right` are `0`, push `str` into `results` and return.
  * b) If just `left` is equal `0`, call the helper with `str + )`, `left` and `right - 1`.
  * c) Else If `left` is equal to `right`, call your helper with `str + (`, `left - 1`, `right`.
  * d) Else call the helper twice:
    * i) First with `str + (`, `left - 1`, `right`
    * ii) Then with `str + )`, `left`, `right - 1`
* 4) Invoke your helper with `''`, `n`, `n`
* 4) Return your results.

# Code

```javascript
function balancedParensPermutations(n) {
  let result = [];

  function recurse(str, left, right) {
    if(left === 0 && right === 0) {
      result.push(str);
      return;
    } if (left === 0){
      recurse(str + ')', left, right - 1);
    } else if(left === right) {
      recurse(str + '(', left - 1, right);
    } else {
      recurse(str + ')', left, right - 1);
      recurse(str + '(', left - 1, right);
    }
  }
  recurse('', n, n);
  return result;
}

```

# Resources

[Balanced Parenthesis Permutations on Geeks for Geeks](https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/)

[Balanced Parenthesis Permutations on Leetcode](https://leetcode.com/problems/generate-parentheses/description/)
