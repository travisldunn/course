/*
 * ## Greater Values
 *
 * Given an sorted array of integers, and a target value return
 * the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
 */

function greaterValues(arr, target) {
  let mid,
    l = 0,
    r = arr.length;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] <= target && arr[mid + 1] >= target)
      return arr.length - mid - 1;
    if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }

  return 0;
}

console.log(greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5));
console.log(greaterValues([1, 2, 3], 4));
console.log(greaterValues([1, 10, 22, 59, 67, 72, 100], 13));
