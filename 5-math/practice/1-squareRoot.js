/*
 * ## Square Root
 *
 * *Given an positive integer, find the square root.*
 *
 * **Parameters**
 * Input: value {Integer}
 * Output: {Float}
 *
 * **Constraints**
 * Do not use a native built in method.
 * Ensure the result is accurate to 6 decimal places (0.000001)
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `4 --> 2.0`
 * `98 --> 9.899495`
 * `14856 --> 121.885192
 */

function squareRoot(n) {
  if (n === 1 || n === 0) {
    return n;
  }
  let low = 0;
  let high = n;
  let result = 0;
  let sq = 0;
  let mid = 0;
  while (low <= high) {
    mid = (low + high) / 2;
    sq = mid * mid;
    if (sq == n) {
      return mid;
    } else if (sq < n) {
      low = mid + 0.0000001;
      result = mid;
    } else {
      high = mid - 0.0000001;
    }
  }
  return result.toFixed(6);
}
