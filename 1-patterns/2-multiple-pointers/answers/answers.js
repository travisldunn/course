// ***********Multiple Pointers*************

// Check if the given array has a pair of numbers whos average is equal to a given number

function averagePair(ary, num) {
  let l = 0,
    r = ary.length - 1;
  while (l < r) {
    if ((ary[l] + ary[r]) / 2 === num) return true;
    (ary[l] + ary[r]) / 2 < num ? ++l : --r;
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([], 2.5));
// console.log(averagePair([-1, 0, 1, 2, 3, 4, 5, 6], 4.1));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

// Check if the first string is a subsequence (in order) of the second string

isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) return false;
  let i = 0,
    j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length - 1) return true;
    j++;
  }

  return false;
};

isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) return false;
  let l = 0,
    r = 0;
  while (l < str1.length && r < str2.length) {
    if (str1[l] === str2[r]) ++l;
    ++r;
  }
  return l === str1.length;
};

// console.log(isSubsequence("hello", "hoooello world"));
// console.log(isSubsequence("hdo", "hdo"));

// Count the number of unique values in an ordered array of numbers using the two pointer pattern

countUniqueValues = (ary) => {
  if (ary.length > 0) {
    var count = 1;
  } else {
    return 0;
  }

  let left = 0,
    right = 0;

  while (right < ary.length) {
    if (ary[right] === ary[left]) {
      ++right;
    } else {
      left = right;
      ++count;
    }
  }
  return count;
};

countUniqueValues = (ary) => {
  if (!ary.length) return 0;
  let s = 0,
    f = 0,
    count = 1;
  while (f < ary.length) {
    if (ary[s] === ary[f]) f++;
    else {
      s = f;
      count++;
    }
  }
  return count;
};

countUniqueValues = (ary) => {
  if (!ary.length) return 0;
  let i = 0,
    j = 0,
    count = 1;
  while (j < ary.length) {
    if (ary[i] !== ary[j]) {
      count++;
      i = j;
    }
    j++;
  }
  return count;
};

// console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 4, 6, 7, 7, 7]));
// console.log(countUniqueValues([]));

sumZero = (ary) => {
  let left = 0,
    right = ary.length - 1;

  while (left < right) {
    if (ary[left] + ary[right] === 0) return [ary[left], ary[right]];
    ary[left] + ary[right] > 0 ? --right : ++left;
  }

  return false;
};

firstServed = (out, dineIn, served) => {
  let current = 0,
    left = 0,
    right = 0;

  while (current < served.length) {
    if (served[current] === out[left]) left++;
    else if (served[current] === dineIn[right]) right++;
    else return false;
    current++;
  }

  if (left === out.length && right === dineIn.length) return true;

  return false;
};

firstServed = (out, dIn, served) => {
  let i = 0,
    o = 0,
    idx = 0;
  while (idx < served.length) {
    if (out[o] === served[idx]) o++;
    else if (dIn[i] === served[idx]) i++;
    else return false;
    idx++;
  }
  return i + o === served.length;
};

const takeOut = [1, 3, 5];
const dineIn = [2, 4, 6, 7];
const served = [1, 2, 3, 5, 4, 6, 7];
// const served = [1, 2, 4, 6, 5, 3];

console.log(firstServed(takeOut, dineIn, served));

// Given an array of integers, find the pivot index where
// the sum of the items to the left equal to the sum of the items to the right.

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

function findPivot(ary) {
  let l = 0,
    r = ary.length - 1,
    lsum = ary[l],
    rsum = ary[r];

  while (l < r) {
    if (lsum <= rsum) {
      ++l;
      lsum += ary[l];
    } else {
      --r;
      rsum += ary[r];
    }
  }

  if (lsum === rsum) return l;
  else return -1;
}

console.log(findPivot([1, 2, 1, 6, 3, 1])); // 3
console.log(findPivot([7, 2, 7])); // 1
console.log(findPivot([1, 3, 3, 2])); // -1
