/*
 * ## Closest Value
 *
 * Given a sorted bit array of integers, and a target value,
 * find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 */

function closestValue(arr, target) {
  let l = 0,
    r = arr.length,
    closest = Infinity,
    dif,
    val,
    mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    dif = Math.abs(target - arr[mid]);
    if (dif < closest) {
      closest = dif;
      val = arr[mid];
    }
    if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return val;
}

console.log(closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 1));
// console.log(closestValue([1, 2, 3], 8));
// console.log(closestValue([1, 10, 22, 59, 67, 72, 100], 70));
