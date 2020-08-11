// # Math - Random Number

// #### Prompt

// Given a function `foo` that produces random numbers between 1 - 5 with equal probability, write a function `bar` that generates numbers between 1 - 7, that uses`foo` internally and ** NOT ** the built in `random` function.

// #### Examples:

// ```

// Input: None
// Output: 4

// If we were to run this one hundred times, we would expect there to be an almost
// even distribution of fourteen 1s, 2s, 3s, 4s, 5s, 6s, and 7s.

// You'll have access to a helper method:
// foo() => P(1, 2, 3, 4, 5) = 20%

// It outputs numbers between 1-5, each with 20% probability.

// You DO NOT have to write foo(), it will be given.

// ```

// #### Input:
// ```
// None
// ```

// #### Output
//     ```
// integer
// ```

// #### Constraints:

// ** Time **: `O(1)`

//     ** Space **: `O(1)`

// Solve this without using the built in random function.

// #### Hints:

// How would you solve this if you had the ability to generate random numbers between`1-8` with equal probability(more numbers than necessary) ?

//     How can you create a larger range of numbers with equal probability ?

// Given
function foo5() {
  return Math.floor(Math.random() * 5) + 1;
}

function foo7() {
  let result = 5 * foo5() + foo5() - 5;
  if (result < 22) {
    return (result % 7) + 1;
  }
  return foo7();
}

function test(num) {
  let result = {};
  while (num > 0) {
    let n = foo7();
    result[n] ? (result[n] += 1) : (result[n] = 1);
    num--;
  }
  return result;
}

console.log(test(10000000));
