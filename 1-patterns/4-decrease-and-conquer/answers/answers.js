// *************Decrease and Conquer*******************

/*
 * Number of Ones
 *
 * *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Output: {Integer}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
 * `[0, 0, 0] --> 0`
 * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
 */

function numberOfOnes(arr) {
  let start = 0;
  let end = arr.length;
  let midpoint;
  while (start < end) {
    midpoint = parseInt(start + parseInt((end - start) / 2));
    if (arr[midpoint] === 0) {
      start = midpoint + 1;
    } else {
      end = midpoint;
    }
  }
  return arr.length - start;
}

function numberOfOnes(arr) {
  let mid,
    l = 0,
    r = arr.length - 1;

  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (!arr[mid] && arr[mid + 1]) return arr.length - mid - 1;
    if (arr[mid] && !arr[mid - 1]) return arr.length - mid;
    if (arr[mid]) r = mid - 1;
    else l = mid + 1;
  }

  return 0;
}
/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
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
  let closest = Infinity;
  let value = null;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let midpoint = parseInt(start + parseInt((end - start) / 2));
    let difference = Math.abs(target - arr[midpoint]);
    if (difference < closest) {
      closest = difference;
      value = arr[midpoint];
    }
    if (arr[midpoint] < target) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }
  return value;
}

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

/*
 * ## Greater Values
 *
 * *Given an sorted array of integers, and a target value return the number of values greater the target.*
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
  let start = 0;
  let end = arr.length;
  let midpoint;
  while (start < end) {
    midpoint = parseInt(start + parseInt((end - start) / 2));
    if (arr[midpoint] <= target) {
      start = midpoint + 1;
    } else {
      end = midpoint;
    }
  }
  return arr.length - start;
}

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

/*
 * ## Sorted and Rotated Array [Extra Credit]
 * *Given a array that is sorted an rotated, find out if a target value exists in the array.*
 *
 * An sorted array is rotated by taking an unknown amount of values from the beginning and placing it at the end.
 *
 * `[3, 4, 5, 1, 2]` is rotated left by 2.
 * `[99, 14, 25, 78, 93]` is rotated to the right by 1.
 *
 * **Parameters**
 * Input: arr {Array}
 * Output: {Boolean}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(N)
 *
 * **Examples**
 * `[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true`
 * `[35, 46, 79, 102, 1, 14, 29, 31], 47 --> false`
 * `[7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true`
 */

function rotatedArraySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end && nums[start] > nums[end]) {
    let mid = parseInt((start + end) / 2);
    if (nums[start] < nums[mid]) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (target >= nums[0]) {
    return binarySearch(nums, 0, end, target);
  } else {
    return binarySearch(nums, end + 1, nums.length - 1, target);
  }
}

function binarySearch(nums, start, end, target) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

/*
 * ## Multiplication Using Russian Peasant [Extra Credit]
 *
 * *Given two positive integers, return its product using Russian Peasant method of multiplication*
 *
 * Read up on how to apply the Russian Peasant method [here](https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication). It is also referred to as the Egyptian multiplication.
 *
 * **Parameters**
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * Assume a <= b, and the value of a is N.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `734, 487 --> 357458`
 * `846, 908--> 768168`
 */

function multiplicationRussianPeasant(a, b) {
  let finalSum = 0;
  while (b >= 1) {
    if (b % 2 != 0) {
      finalSum += a;
    }
    if (b === 1) {
      break;
    }
    a *= 2;
    b = parseInt(b / 2);
  }
  return finalSum;
}
