/*
 *  Problem:  Trailing Zeros
 *
 *  Prompt:   Given a positive integer, return the number of trailing zeros
 *            are present on the factorial of that number.
 *
 *  Input:    Integer >= 0 (n)
 *  Output:   Integer
 *
 *  Example:  n = 10
 *
 *            trailingZeros(n) = 2
 *
 *            n = 27
 *
 *            trailingZeros(n) = 6
 *
 *  Explanation: 10! is 3628800, and so has 2 trailing zeros
 *               27! is 1088886945041835216068000000, and so has 6 trailing zeros
 *
 *  Note:     A straightforward way of solving this problem involves just
 *            taking the factorial of your input and dividing by 10 until you
 *            run out of trailing zeros. But what is the major problem with this?
 *
 *            A good way to start solving this problem is by trying a lot of examples.
 */

// Time Complexity: O(log N)
// Auxiliary Space Complexity: O(1)

function trailingZeros(n) {
  let result = 0;
  let power = 1;
  while (Math.floor(n / Math.pow(5, power)) > 0) {
    result += Math.floor(n / Math.pow(5, power));
    power++;
  }
  return result;
}
