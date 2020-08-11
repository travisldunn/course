/*
 *  Homework 04 - Helper Method Recursion
 *
 *  Solve the following problems using helper method recursion.
 */

/*
 * 1a. What is the term when the recursive call invokes itself more than once.
 *
 */

//  multiple recursion

/*
 * 1b. List the steps involved to build a Helper Method Recursion algorithm.
 *
 */

//  *  1) instantiate variables
//  *  2) return result
//  *  3) instantiate the helper function and invoke it
//  *  4) base case inside the helper function
//  *  5) recursive cases

/*
 * 1c. Should the recursive case or base case typically be tackled first?
 *
 */

// base case

/*
 * 2a. Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */
// function printArray(arr) {
//   if (arr.length === 0) return;
//   console.log(arr[0]);
//   printArray(arr.splice(1));
// }

function printArray(arr) {
  function traverse(index) {
    if (index > arr.length - 1) return;
    console.log(arr[index]);
    traverse(++index);
  }
  traverse(0);
}

/*
 * 2b. Print each item in an array backwards
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */
// function printReverse(arr) {
//   if (arr.length === 0) return;
//   console.log(arr[arr.length - 1]);
//   arr.pop();
//   printReverse(arr);
// }

function printReverse(arr) {
  function traverse(index) {
    if (index < 0) return;
    console.log(arr[index]);
    traverse(--index);
  }
  traverse(arr.length - 1);
}

/*
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */
// function reverseString(str) {
//   var reversed = "";
//   function helper(str) {
//     if (str.length === 0) return;
//     reversed += str[str.length - 1];
//     return helper(str.slice(0, str.length - 1));
//   }
//   helper(str);
//   return reversed;
// }

function reverseString(str) {
  var reversed = "";
  function traverse(index) {
    if (index < 0) return;
    reversed += str[index];
    return traverse(--index);
  }
  traverse(str.length - 1);
  return reversed;
}

// Given an array of integers, create an array of two-item arrays

function arrayPairs(arr) {
  let pairs = [];
  function traverse(arr) {
    if (!arr.length) return;
    pairs.push([arr[0], arr[1]]);
    traverse(arr.slice(2));
  }
  traverse(arr);
  return pairs;
}

// console.log(arrayPairs([1, 2, 3, 4, 5, 6])); // [[1,2], [3,4], [5,6]]
// console.log(arrayPairs([1, 2, 3, 4, 5])); // [[1,2], [3,4], [5, undefined]]

//  Flatten a nested array

function flatten(arr) {
  let flat = [];
  function traverse(arr) {
    if (!arr.length) return;
    if (typeof arr[0] === "object") traverse(arr[0]);
    else flat.push(arr[0]);
    traverse(arr.slice(1));
  }
  traverse(arr);
  return flat;
}

// flatten = (arr) => {
//   let flat = [];
//   for (let el of arr) {
//     if (typeof el === "object") flat = flat.concat(flatten(el));
//     else flat.push(el);
//   }
//   return flat;
// };

// flatten = (arr, flat = []) => {
//   for (let el of arr) {
//     if (typeof el === "object") flatten(el, flat);
//     else flat.push(el);
//   }
//   return flat;
// };

// console.log(flatten([1, [2, 3, [4]], 5, [[6]]])); //  [1, 2, 3, 4, 5, 6]

// Given a base and an exponent, create a function to find the power

function power(base, exponent) {
  let num = 1;
  function traverse(ex) {
    if (ex === 0) return 1;
    num *= base;
    traverse(ex - 1);
  }
  traverse(exponent);
  return num;
}

// console.log(power(3, 4)); // 81
// 1 -- > 3 -- > 9 -- > 27 -- > 81

function power(base, exponent) {
  if (base <= 1) return 1;
  if (exponent === 0) return 1;
  if (exponent <= 1) return base;
  return base * power(base, --exponent);
}

// Merge two sorted arrays

function merge(arr1, arr2) {
  let merged = [];
  function traverse(arr1, arr2) {
    if (!arr1.length && !arr2.length) return;
    if (arr1[0] <= arr2[0] || !arr2.length) {
      merged.push(arr1[0]);
      traverse(arr1.slice(1), arr2);
    } else if (arr1[0] > arr2[0] || !arr1.length) {
      merged.push(arr2[0]);
      traverse(arr1, arr2.slice(1));
    }
  }
  traverse(arr1, arr2);
  return merged;
}

// console.log(merge([1, 4, 7], [2, 3, 6, 9])); // [1, 2, 3, 4, 6, 7, 9]

// Given two integers`n` and`k`, return ** all possible combinations ** of`k` numbers from`1` to`n`.

function combinations(n, k) {
  let result = [];

  function recurse(start, combos) {
    if (combos.length === k) {
      return result.push(combos.slice());
    }
    // Check if you can actually create a combo of valid length
    // given current start number
    // For example: 5 choose 4 can't begin with [3] since it would never have 4 numbers
    if (combos.length + (n - start + 1) < k) {
      return;
    }
    recurse(start + 1, combos);
    combos.push(start);
    recurse(start + 1, combos);
    combos.pop();
  }

  recurse(1, []);
  return result;
}

// console.log(combinations(4, 2)); // [[1, 2],[1, 3],[1, 4],[2, 3],[2, 4],[3, 4]]
// console.log(combinations(3, 1)); //  [[1], [2], [3]]

function isPalindrome(str) {
  function traverse(left, right) {
    if (left > right) return true;
    if (str[left] !== str[right]) return false;
    return traverse(++left, --right);
  }
  return traverse(0, str.length - 1);
}
