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

# 321 - Knapsack Problem 0/1

Given a set of items where each item has a weight and a value. And given a knapsack with max weight capacity, determine the maximum value that can be placed into the knapsack without going over the capacity.
```
Input: An integer array of weights
           An integer array of values
           The ith item is weights[i] and values[i].
Output: Integer of maximum total value
```
# Example
```
Input:
  weights = [10, 20, 30]
  values =  [60, 100, 120]
  capacity = 50

Output: 220
```

![Knapsack](http://res.cloudinary.com/outco-io/image/upload/v1521248027/Knapsack.png)

# Constraints
```
                      Intermediate    Advanced
Time Complexity:         O(2^N)        O(KN)
Aux Space Complexity:    O(N)          O(K)
```

`K` is the capacity of the knapsack, `N` is the number of items

Once you add an item to the knapsack, you can't add it again (no replacement)

# Solution

Utilize recursion for the intermediate solution.

Use dynamic programming w/ memoization of the recursive solution or use tabulation

### Advanced Tabulation Approach:

The inner loop iterates from 0 to the knapsack capacity and we try to determine the maximum value at each incremental capacity.
If adding the current item results in a higher value, we update our max value at that capacity.

### Detailed Pseudocode for Tabulation Approach:

* 1) Instantiate an array called `finalMax` with a length equal to one plus the capacity
* 2) Loop through the number of items
  * a) Inside this first loop, make a copy of `finalMax` called `tempMax`
  * b) Create an inner loop and increment a variable `cap` from `0` to the input `capacity`
  * c) If the weight of the `current` item is less than or equal to the `current cap`,
  * d) Check to see if the value at `tempMax[cap - weight]` plus the value of the `current` item is greater value than what is currently in `tempMax[cap]`.
  * e) If greater, replace the value at `tempMax[cap]`
* 3) After performing both loops, the `finalMax` should contain the max values obtainable for each `capacity` level. Since we only care about the max value at our input `capacity`, return `finalMax[capacity]`.

# Code Solution

```javascript
function knapsack(weights, values, capacity) {
  var finalMax = new Int32Array(capacity + 1); // create a new array of 0’s
  for(var i = 0; i < weights.length; i++) {
    var weight = weights[i];
    var value = values[i];
    var tempMax = finalMax.slice(); // make a copy of the finalMax array
    for(var cap = 0; cap <= capacity; cap++) {
      if(cap - weight >= 0) {
        tempMax[cap] = Math.max(tempMax[cap], finalMax[cap - weight] + value);
      }
    }
    finalMax = tempMax;
  }
  return finalMax[capacity];
}

console.log(knapsack([10,20,30], [60,100,120], 50));
```

# Resources

[Knapsack on Geeks for Geeks]( http://www.geeksforgeeks.org/dynamic-programming-set-10-0-1-knapsack-problem/)

[Knapsack on Wikipedia](https://en.wikipedia.org/wiki/Knapsack_problem)
