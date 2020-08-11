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

# 233 - Hexadecimal Converter

Given a positive integer (including 0), convert it to its hexadecimal representation

```
Input: n (Integer)
Output: Str (Hex representation)
```

#### Example:

```
0 => '0'
1 => '1'
2 => '2'
3 => '3'

9 => '9'
10 => 'a'
11 => 'b'

15 => 'f'
16 => '10'

30 => '1e'
31 => '1f'
32 => '20'

255 => 'ff'
256 => '100'
```

# Constraints

```
Time Complexity: O(log(N))

Space Complexity: O(log(N))
```


Please use pure recursion to solve this problem.

Do not use your language's native integer to string converters.



# Hints:

Hexadecimal numbers (`0123456789abcdef`) can also be thought of as a base-16
numbering system. We are most used to the base-10 system (`0123456789`).
If you received this same sort of integer input, and had to convert it to a
base-10 number, how would you do so?

Begin with the smallest cases. What would these be? How could you use this to
build your base cases for recursion?

# Solution:

Use recursion, successively subtracting off the input modulo 16 and dividing the result of that by 16 until you reach a base case.

* 1) Initialize a string called `lib`, that will be how you convert decimal numbers to hex numbers.
* 2) If your input `n` is less than 16, return `lib` at index `n`.
* 3) Otherwise, return a function call to `intToHex` with `((n / 16) - n % 16)` plus `lib[n % 16]`

```javascript
function intToHex(n) {
  let lib = '0123456789abcdef';
  if (n < 16) {
    return lib[n];
  }

  return intToHex(Math.floor(n / 16)) + lib[n % 16]
}
```

# Resources:

[Wikipedia](https://en.wikipedia.org/wiki/Hexadecimal)
