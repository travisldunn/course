/*
 *  Dynamic Programming
 *
 *  Instructions: Dynammic programming takes a lot of practice to recognize as
 *                well as develop algorithms. Thus we will be working on a few
 *                different problems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subproblems - Memoization
 *      				  Recursion sometimes call subproblems repeatedly. These repeated
 *                calls lead to inefficient computations and an exponential time
 *                complexity.
 *
 *      			(2) Optimal substructure - Tabulation
 *      					The solution of a larger problem can be solved using
 *      					solutions of its subproblems.
 *
 *
 *  Problem:  Coin Sum
 *
 *            Given an array of coins and a target total, return how many
 *            unique ways there are to use the coins to make up that total.
 *
 *  Input:    coins {Integer Array}, total {Integer}
 *  Output:   {Integer}
 *
 *
 *  Example:  Input:  [1,2,3], 4
 *
 *                    1+1+1+1
 *                    1+3
 *                    1+1+2
 *                    2+2
 *
 *            Output: 4
 *
 *
 *            Input:  [2,5,3,6], 10
 *
 *                    2+3+5
 *                    5+5
 *                    2+3+2+3
 *                    2+2+6
 *                    2+2+2+2+2
 *
 *
 *            Output: 5
 *
 *    Note:   You have an unlimited number of each coin type. All coins in the
 *            coin array will be unique
 *            Order does not matter. Ex: One penny and one nickel to create six
 *            cents is equivalent to one nickel and one penny
 *
 */

// Time Complexity: O(NK)
// Auxiliary Space Complexity: O(N)
// where N refers to the target total, and K refers to the length of the coins
// array
function coinSum(coins, total) {
  let table = new Array(total + 1);
  table.fill(0);
  table[0] = 1;

  coins.forEach((coin) => {
    for (let i = coin; i < table.length; i++) {
      table[i] = table[i] + table[i - coin];
    }
  });

  return table[table.length - 1];
}

/*
 *  Dynamic Programming
 *
 *
 *  Problem 1:  Max Consecutive Sum
 *
 *  Prompt:    Given an array of integers find the sum of consecutive
 *             values in the array that produces the maximum value.
 *
 *  Input:     Unsorted array of positive and negative integers
 *  Output:    Integer (max consecutive sum)
 *
 *  Example:   input = [6, -1, 3, 5, -10]
 *             output = 13 (6 + -1 + 3 + 5 = 13)
 *
 *
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)
function maxConsecutiveSum(arr) {
  let local = arr[0];
  let ultimate = arr[0];
  for (let i = 1; i < arr.length; i++) {
    local = Math.max(local + arr[i], arr[i]);
    ultimate = Math.max(local, ultimate);
  }
  return ultimate ? ultimate : 0;
}

/*
 *  BitFlip
 *
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made.
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)
function bitFlip(arr, n) {
  let max = 0;
  let start = 0;
  let end = 0;
  while (end < arr.length) {
    if (arr[end] === 0) {
      n--;
    }
    end++;
    while (n < 0) {
      if (arr[start] === 0) {
        n++;
      }
      start++;
    }
    max = Math.max(max, end - start);
  }
  return max;
}
