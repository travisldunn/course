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

# 315 - Longest Palindromic Subsequence

Given a string of lowercase characters (a-z), return the
length of the longest palindromic subsequence.

A palindromic subsequence is a series of characters (not
necessarily consecutive) that form a palindrome.

```
Input: {String}
Output: {Integer}
```

# Example

```
Input:  "vtvvv"
Output: 4

Longest palindromic subsequence here is "vvvv"


Input:  "pwnnb"
Output: 2

Longest palindromic subsequence here is "nn"


Input:  "ttbtctcbt"
Output: 7

Longest palindromic subsequence here is "tbtctbt"
```

# Constraints

```
Time Complexity:			        O(N^2)
Auxiliary Space Complexity: 		O(N^2)
```

# Solution

For our solution, we'll be making use of helper method
recursion.

The overall idea here is to operate off of the idea of the
smallest possible cases. Imagine we have a single character.
We already know that the answer for this is going to be `1`.
This is going to be one of the base cases.

Now imagine a slightly larger case to have two characters.
There are two possible options:

- Characters match => Longest palindromic subsequence length
is `2`
- Characters do not match => Longest palindromic
subsequence length is `1`

All of the cases we've mentioned so far will form the
basis of our base cases later on in our helper method.

As far as where we begin, we'll always be comparing the
distal (left-most and right-most) characters of whichever
string we're inspecting. If the characters match, we know
for sure that however long the Longest Palindromic
Subsequence is, it must have a length of at least `2`.
From here, we'll search inwards to see if there are more
matches. If they don't match, this means that the Longest
Palindromic Subsequence will lie somewhere farther in,
maybe using either the left-most or right-most characters.

Let's get to the steps of helper method recursion that our
function will follow:

1. Instantiate a cache
  - The keys will be strings representing two pointers
  - The values will be integers representing the best
    answer for the range covered by those two pointers.
2. No need to return any state variables. We'll be instead
   returning the function call.
3. Instantiate a helper method called `find`. This helper
   method wants to find the length of the longest
   palindromic subsequence
  - There are two arguments for `find`. Both are integers.
    We'll call them `left` and `right`.
  - Invoke the helper method with `left` set to zero, and
    `right` set to the length of the input string minus one
4. Base cases
  - If left and right are both on the same index, return 1
  - If left and right are one index away from either,
    check the characters they are in the string.
    - If same, return 2
    - If different, return 1
5. Recursive cases - If we pass the base cases, this means
   the pointers are two or more indexes away from each
   other. Two scenarios here for recursion:
  - Left and right characters are the same => Return 2
    plus recursive call of `find` on `left+1` and
    `right-1`
  - Left and right characters are not the same => Return
    the max of either the recursive call of `find` on
    `left + 1, right` or `left, right - 1`.

Note: To make use of the cache, simply cache the results
of the recursive calls before returning them. Additionally,
introduce a base case to check the cache if you've arrived
at left/right pointer coordinates that have already been
visited. In this case, simply return whatever is in the
cache.

# Code

```ruby
def longest_palindromic_subsequence(string)
  cache = Hash.new(0)
  find = lambda do |left, right|
    key = left.to_s + "_" + right.to_s
    if cache.key? (key)
      return cache[key]
    elsif left == right
      return 1
    elsif left == right - 1 and string[left] == string[right]
      return 2
    elsif string[left] == string[right]
      cache[key] = 2 + find.call(left + 1, right - 1)
      return cache[key]
    end
    cache[key] = [find.call(left + 1, right), find.call(left, right - 1)].max
    return cache[key]
  end
  find.call(0, string.length - 1)
end
```

```java
class LongestPalindromicSubsequence {

  public static HashMap<String, Integer> cache = new HashMap<String, Integer>();
  public static String str;

  public static int compute(String input) {
    str = input;
    cache = new HashMap<String, Integer>();
    int result = check(0, str.length() - 1);
    return result;
  }

  public static int check(int left, int right) {
    String key = Integer.toString(left) + "_" + Integer.toString(right);
    if (cache.containsKey(key)) {
      return cache.get(key);
    } else if (left == right) {
      return 1;
    } else if (left == (right - 1) && str.charAt(left) == str.charAt(right)) {
      return 2;
    } else if (str.charAt(left) == str.charAt(right)) {
      cache.put(key, 2 + check(left + 1, right - 1));
      return cache.get(key);
    }

    cache.put(key, Math.max(check(left + 1, right), check(left, right - 1)));
    return cache.get(key);
  }
}
```

# Resources
[Longest Palindromic Subsequence](https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/)
