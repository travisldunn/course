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

# 150 - How Many Primes

Given a positive number **n**, return the number of prime numbers less than
this number.


```
Input:     n: Integer
Output:    n: Integer
```

# Example

```
Input: 20
Output: 8
Reason: There are 8 prime numbers less than 20. These are: 2,3,5,7,11,13,17,19

Input: 5
Output: 2
Reason: There are 2 prime numbers less than 5. These are: 2,3
```


# Constraints

```
Intermediate constraints:
Time Complexity: O(N^2)
Auxiliary Space Complexity:  O(1)

Advanced constraints:
Time Complexity: O(Nlog(log(N)))
Auxiliary Space Complexity: O(N)

```

# Notes

- What are the ways that we can optimize the solutions? If we're attempting
  the intermediate solution, in order to determine if a number is prime,
  do we need to check every single number from 2 up through that number?
  - It is possible to actually stop at an earlier point. We could stop at the
    halfway point instead. For example, in checking if 19 is a prime number,
    we can stop checking divisibility at 10 because 10 * 2 is already 20; beyond
    the number we're checking.
  - Following that up, it's actually possible to stop even earlier at the
    square root of the number. For example, look at the multiples of 12:

    ```
    2 * 6 = 12
    3 * 4 = 12
    4 * 3 = 12
    6 * 2 = 12
    ```
    As you can see, once we pass that square root point (~3.46), we don't need
    to search further as the numbers we'll be testing have already been tested.

# Solution

### Intermediate Solution

Two steps:

1) Create a function (isPrime) that determines whether a number is a prime
   number. This can be done by checking the divisibility of that number
   by every number from 2 through (number - 1)
2) Call isPrime on every number from 2 through to (**n** - 1). Each time a
   prime number is encountered, increment a result counter by one. Return
   the result at the end of the function.

### Advanced Solution

Use the Sieve of Eratosthenes

![Sieve of Eratosthenes](https://res.cloudinary.com/outco-io/image/upload/v1541024861/sieve.jpg)

The idea behind this sieve is to still iterate from 2 to the input number
minus 1; all the while looking for prime numbers. The difference now, is that
whenever we find a prime number, we'll use that number to eliminate its
multiples in order that we don't *start from scratch* when inspecting future
numbers.

- Imagine we're solving for howManyPrimes(10). We'd initially create this array:

[null, null, true, true, true, true, true, true, true, true]

- Next, we'll iterate from index 2 through to index 9.
- Starting at index 2, we see a `true`. This lets us know it is a prime number;
  additionally, we also want to eliminate all of its multiples as prime
  possibilities. Find all of its multiples and turn them to be false.

[null, null, true, true, **false**, true, **false**, true, **false**, true]

- Let's move on to the index 3. We can see that there's a true there as well.
  Prime as well!
- Let's find all of index 3's multiples and make sure that they are false

[null, null, true, true, **false**, true, **false**, true, **false**, **false**]

- We can see that only the index 9 element changed. This makes sense as the
  index 6 element was already changed due to prime number 2 eliminating its  
  multiples. (Definitely some optimizations we can do here!)

[null, null, true, true, **false**, true, **false**, true, **false**, **false**]

- At this point, continue iterating through the rest and perform the same
  operation. You'll see that nothing changes as index 5 and index 7's multiples
  are larger than the length of the array (additional optimizations!)
- Finally, return the count of all the `true` elements inside the array


##### Pseudocode Steps (Includes optimizations):

- Create an result array of length **n**
- From index 2 all the way to **n** - 1, make the those locations a boolean of
  true
- Create a for loop with index beginning at 2, iterating until the product of
  the index multiplied against index is less than **n**
  - if the element at the index is false, continue to the next iteration of the
    for loop
  - if the element is true, that means that it is prime. The additional step to
    take now is to check all the multiples of this index location, and turn them
    to be false
- Once the outside for loop is complete, create a count variable and set it
  equal to 0.
- Loop through the result array; for every true element, increment the count
- Return count


# Code

```javascript
// Intermediate
function isPrime(num) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

function howManyPrimes(n) {
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (isPrime(n)) {
      count++;
    }
  }

  return count;
}




// Advanced
function howManyPrimes(n) {
  let result = [];
  for (let i = 2; i < n; i++) {
    result[i] = true;  
  }
  for (let i = 2; i * i < n; i++) {
    if (!result[i]) {
      continue;
    }
    for (let j = i * i; j < n; j += i) {
      result[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (result[i]) {
      count++;
    }
  }
  return count;
}
```

# Resources

[Leetcode Hints](https://leetcode.com/problems/count-primes/)
