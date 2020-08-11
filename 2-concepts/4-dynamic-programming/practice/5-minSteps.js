/*
 *  Problem 2: Minimum Steps to One - use memoization
 *
 *     Given a positive integer, you can perform any combination of these 3
 *     steps:
 *      1.) Subtract 1 from it.
 *      2.) If its divisible by 2, divide by 2.
 *      3.) If its divisible by 3, divide by 3.
 *
 *     Find the minimum number of steps that it takes get from N to 1
 *
 *  Input: n {Integer}
 *  Output: {Integer}
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)
function minSteps(n) {
  let results = [0, 0];

  for (let i = 2; i <= n; i++) {
    let min = results[i - 1];
    min = i % 2 ? min : (min = Math.min(min, results[i / 2]));
    min = i % 3 ? min : (min = Math.min(min, results[i / 3]));
    results.push(min + 1);
  }

  return results[n];
}
