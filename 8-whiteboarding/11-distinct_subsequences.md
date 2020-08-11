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

# 501 - Distinct Subsequences

Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
(ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

```
Input: 	 String, String
Output:  Int
```

# Example
```
Input 1:  "rabbbit", "rabbit"
Output 1: 3    

Subsequences:
rabbbit --> rabbit
^^^^ ^^
rabbbit --> rabbit
^^ ^^^^
rabbbit --> rabbit
^^^ ^^^

Input 2:  "a", "" 	           
Output 2: 1 ("a" --> "")   

```


# Constraints

```
Time Complexity: O(N * M) with N being the length of string, and M being the length of the subsequence.
Auxiliary Space Complexity: O(N)     
```


# Solution
This can be solved using memoization (recursively).

* In the outer parent function, initialize a cache.
* Initialize a helper function that takes in two parameters: two indices (i, j), i for the original string and j for the subsequence.
When calling the helper function at the bottom of your funtion, initialize both indices to 0, and return the result you would get from it.
* Within the recursive function:
    * Base cases:  
        * If you have reached the end of the original string with i, and the end of the subsequence with j, you have successfully found the subsequence in the original
string, return 1.
        * If you have reached the end of the original string with i, but not the end of the subsequence, then return 0.
        * If you have reaached the end of the subsequence but not the end of the original string, return 1.
        * If both indices as keys exist in your cache, return the value at those indices.
    * Initialize a sum variable to 0
    * Check if the two characters at i and j in the original string and subsequence respectively match.
        * If so, add to the sum the recursive results of skipping the original character, or keeping it.
        * If not, add to the sum, _only_ the recursive result of skipping a character from the original string.
    * Store the sum you have calculated at the key in your cache.
    * Return the value in the cache


# Code Solution

```python
def distinct_subsequences(s, t):        
    n, m = len(s), len(t)
    cache = {}
    def helper(i, j):

        if i == n: return 1 if j == m else 0
        if j == m: return 1
        key = (i, j)
        if key in cache: return cache[key]
        # for each char in S, if equal to char in T, either keep it or not
        # if not equal to T, have to skip
        ans = 0
        if s[i] == t[j]:
            ans += helper(i+1, j+1) + helper(i+1, j)
        else:
            ans += helper(i+1, j)    
        cache[key] = ans    
        return ans    
    return helper(0, 0)
```


# Resources
[Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/discuss/)
