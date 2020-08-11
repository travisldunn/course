/*
 *  Homework 01 - Complexity
 *
 *  For the following functions, write the expected Time and Auxiliary Space
 *  Complexity using what you know about nested loops, hash table look-ups and
 *  the runtime of built in functions.
 *
 *  NOTE: You don't need to code to anything for these problems, just write
 *  what you the complexity to be using big-O notation
 **/

/*
Order of Magnitude

Reduce the following into it's Big-O order of magnitude.

1. 5 + N                    Answer: 
2. N + N^2                  Answer: 
3. 15N + 13N                Answer: 
4. 10000                    Answer: 
5. log(N) + 1               Answer: 
6. log(N) * 3 + 14N + 3     Answer: 
7. Nlog(N) + 3N^2           Answer: 
8. N^3 + log(N^4)           Answer: 
9. N! + 180000N^2           Answer: 
10. 15002^N                 Answer: 

*/

/*
 *  List the time and auxiliary space complexity of each of the following functions.
 */

/*
 *     Index Of
 *
 *     Given an array of integers and a target value, return the index of the first
 *     element that matches the target value. If there are no matches, return -1.
 *
 *     Parameters
 *     Input: arr {Array of Integers}
 *     Input: target {Integer}
 *     Output: {Integer}
 *
 *     Examples
 *     [1, 2, 3, 4, 5, 6], 5 --> 4
 *     [9, 83, 74], 8 --> -1
 *     [6, 4, 7, 9, 7, 8, 2, 4, 3], 7 --> 2
 *
 *     Time Complexity:
 *     Auxiliary Space Complexity:
 */

function indexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

/*
 *     Evens
 *
 *     Given an array of integers, return an array of only the even values.
 *
 *     Parameters
 *     Input: arr {Array of Integers}
 *     Output: {Array of Integers}
 *
 *     Examples
 *     [1, 2, 3, 4, 5, 6] --> [2, 4, 6]
 *     [9, 83, 74] --> [74]
 *     [6, 4, 7, 9, 7, 8, 2, 4, 3] --> [6, 4, 8, 2, 4]
 *
 *     Time Complexity:
 *     Auxiliary Space Complexity:
 */

function evens(arr) {
  var results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      results.push(arr[i]);
    }
  }
  return results;
}

/*
 *    Split
 *
 *    Given a string of characters, return an array with each character separated
 *    into its own separate item.
 *
 *    Parameters
 *    Input: str {String}
 *    Output: {Array of Characters}
 *
 *    Examples
 *
 *    'hello' --> ['h', 'e', 'l', 'l', 'o']
 *    'foo' --> ['f', 'o'. 'o']
 *
 *    Time Complexity:
 *    Auxiliary Space Complexity:
 */

function split(string) {
  let results = [];
  for (let i = 0; i < string.length; i++) {
    results.push(string[i]);
  }
  return results;
}

/*
 *    Sum
 *
 *    Given an array of integers, return the sum of all the integers.
 *
 *    Parameters
 *    Input: arr {Array of Integers}
 *    Output: {Integer}
 *
 *    Examples
 *    [1, 2, 3, 4, 5] --> 15
 *    [0, 1, -1] --> 0
 *    [] --> 0
 *
 *    Time Complexity:
 *    Auxiliary Space Complexity:
 */

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/*
 *   Merge Arrays
 *
 *   Given two sorted arrays of integers, return a merged sorted array of both inputs.
 *
 *   Parameters
 *   Input: arr1 {Array of Integers}
 *   Input: arr2 {Array of Integers}
 *   Output: {Array of Integers}
 *
 *   Examples
 *   [1, 3, 9], [2, 4, 8] --> [1, 2, 3, 4, 8, 9]
 *   [12, 25, 40], [20, 37, 45] --> [12, 20, 25, 37, 40, 45]
 *   [10, 13, 24], [12, 35] --> [10, 12, 13, 24, 35]
 *
 *   Time Complexity:
 *   Auxiliary Space Complexity:
 */

function merge(arr1, arr2) {
  const totalElements = arr1.length + arr2.length;
  let result = [];
  let i = 0;
  let j = 0;
  while (i + j < totalElements) {
    if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

/*
 *    Counting Sort
 *
 *    Given an array and a range (min and max), use counting sort to sort the input array.
 *
 *    Parameters
 *    Input: arr {Array of Integers}
 *    Input: min {Integer}
 *    Input: max {Integer}
 *    Output: {Array of Integers}
 *
 *    Examples
 *    [5, 3, 1, 8, 9] --> [1, 3, 5, 8, 9]
 *    [8, 1, 3, 4, 6, 9] --> [1, 3, 4, 6, 8, 9]
 *    [4, 0, 1, 5, 6] --> [0, 1, 4, 5, 6]
 *
 *   Time Complexity:
 *   Auxiliary Space Complexity:
 */

function countingSort(arr, min, max) {
  let count = new Array(max - min + 1).fill(0);
  for (i = 0; i < arr.length; i++) {
    count[arr[i] - min] = count[arr[i] - min] + 1;
  }
  let index = 0;
  for (let i = 0; i < max + 1; i++) {
    while (count[i - min] > 0) {
      arr[index] = i;
      index += 1;
      count[i - min] = count[i - min] - 1;
    }
  }
  return arr;
}

/*
 *    Binary Search
 *
 *    Given a sorted array and a target value, use binary search to return the index of the target in the input array.
 *    Return -1 if no such target is found.
 *
 *    Parameters
 *    Input: arr {Array of Integers}
 *    Input: val {Integer}
 *    Output: {Integer}
 *
 *    Examples
 *    [1, 3, 4, 5, 8, 9], 5 --> 3
 *    [5, 7, 10, 12, 14], 7 --> 1
 *    [2, 4, 8, 9, 15], 3 --> -1
 *
 *   Time Complexity:
 *   Auxiliary Space Complexity:
 */

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (arr[mid] > val) {
      high = mid - 1;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

/*
 *    Factorial
 *
 *    Given an input integer n, return the n factorial value.
 *
 *    Parameters
 *    Input: n {Integer}
 *    Output: {Integer}
 *
 *    Examples
 *    5  --> 120 (5 * 4 * 3 * 2 * 1)
 *    1 --> 1 (1)
 *    9 --> 362880 (9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
 *
 *    Time Complexity:
 *    Auxiliary Space Complexity:
 */

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/*
 *  First Times Last
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function firstTimesLast(arr) {
  let result = null;
  if (arr.length < 2) {
    return result;
  }
  result = arr[0] * arr[arr.length - 1];
  return result;
}

/*
 *  Most Frequent Occurrence
 *  NOTE: The string only contains letters in it
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function mostFrequentOccurrence(str) {
  const lowerString = str.toLowerCase();
  let letters = {};
  let mostFrequent;

  for (let i = 0; i < lowerString.length; i++) {
    let char = str[i].toLowerCase();
    if (letters[char]) {
      letters[char]++;
    } else {
      letters[char] = 1;
    }
  }

  for (let key in letters) {
    if (!mostFrequent || letters[key] > mostFrequent[1]) {
      mostFrequent = [key, letters[key]];
    }
  }

  return mostFrequent[0];
}

/*
 *  Print Unordered Pairs
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function printUnorderedPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
}

/*
 *  Sorted Array Search
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function sortedArraySearch(sortedArray, target) {
  function hunt(start, end) {
    if (start > end) {
      return false;
    }
    const mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === target) {
      return true;
    }
    if (sortedArray[mid] > target) {
      return hunt(start, mid - 1);
    }
    return hunt(mid + 1, end);
  }

  return hunt(0, sortedArray.length - 1);
}

/*
 *  Make Combined Matrix
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function makeCombinedMatrix(arr1, arr2) {
  let result = [];
  let row;

  for (let i = 0; i < arr1.length; i++) {
    row = [];
    for (let j = 0; j < arr2.length; j++) {
      row.push(arr1[i] + arr2[j]);
    }
    result.push(row);
  }
  return result;
}

/*
 *  Is There Cat
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function isThereCat(obj) {
  while (obj.cat) {
    console.log("There is cat!");
    delete obj.cat;
  }
  console.log("There is no cat!");
}

/*
 *  Power of Threes
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function powerOfThrees(int) {
  let result = [];
  let count = 1;
  let temp = 1;

  while (count <= 3) {
    temp *= int;
    result.push(temp);
    count++;
  }
  return result;
}

/*
 *  Find Duplicate
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function findDuplicate(collection) {
  let len = collection.length;
  let current;

  for (let i = 0; i < len; i++) {
    current = collection[i];
    for (let j = 0; j < len; j++) {
      if (j !== i && current === collection[j]) {
        return true;
      }
    }
  }
  return false;
}

/*
 *  Intersection Points
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */
function intersectionPoints(arr1, arr2) {
  let result = [];
  let points;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        points = [arr1[i], arr2[j]];
        result.push(points);
        points = [];
      }
    }
  }
  return result;
}

/*
 *  Nth Fibonacci
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */
function nthFibonacci(n) {
  let result = [0, 1];
  for (let i = 1; i < n; i++) {
    result[i + 1] = result[i] + result[i - 1];
  }
  return result[n];
}

/**
 *  Find Duplicate
 *
 *  Problem: Refactor findDuplicate such that it now finds and returns all
 *           repeating elements in O(N) time complexity.
 *  Auxiliary Space Complexity:
 */

function findDuplicate(collection) {
  let len = collection.length;
  let current = {};

  for (let i = 0; i < len; i++) {
    current[i] = ++current[i] || 1;
  }

  for (let key in current) {
    if (current[key] > 1) return true;
  }
  return false;
}

/*
 *  nth Fibonacci
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function nthFibonacci(n) {
  let cache = {};

  function searchFib(index) {
    if (cache[index]) {
      return cache[index];
    }
    if (index < 2) {
      return index;
    }
    let result = searchFib(index - 1) + searchFib(index - 2);
    cache[index] = result;
    return cache[index];
  }

  return searchFib(n);
}
