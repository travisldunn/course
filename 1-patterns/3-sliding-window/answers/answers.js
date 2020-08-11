// ******************  Sliding Window  ***************

// ----> Write a function called findLongestSubstring, which accepts a string and returns the length of the longest
// ----> substring with all distinct characters.

findLongestSubstring = (str) => {
  let collection = {},
    start = 0,
    max = 0;

  for (let i = 0; i < str.length; i++) {
    if (collection[str[i]]) start = Math.max(start, collection[str[i]]);
    max = Math.max(max, i - start + 1);
    collection[str[i]] = i + 1;
  }
  return max;
};

findLongestSubstring = (str) => {
  let found = {},
    start = 0,
    max = 0,
    c;

  for (let i = 0; i < str.length; i++) {
    c = str[i];
    if (found[c]) start = Math.max(start, found[c]);
    max = Math.max(max, i - start + 1);
    found[c] = i + 1;
  }
  return max;
};

findLongestSubstring = (str) => {
  const found = {};
  let start = 0,
    max = 0;

  for (let i = 0; i < str.length; i++) {
    if (found[str[i]]) start = Math.max(start, found[str[i]]);
    max = Math.max(max, i - start + 1);
    found[str[i]] = i + 1;
  }
  return max;
};

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbbb")); // 1

// ----> Find the max sum of num consective numbers in the array

maxSubarraySum = (ary, num) => {
  let max = 0,
    temp = 0;
  for (let i = 0; i < num; i++) {
    temp += ary[i];
  }

  max = Math.max(max, temp);
  temp = max;

  for (let i = num; i < ary.length; i++) {
    temp += ary[i] - ary[i - num];
    max = Math.max(max, temp);
  }

  return max;
};

maxSubarraySum = (ary, num) => {
  let max = 0;
  for (let i = 0; i < num; i++) max += ary[i];
  let window = max;
  for (let i = num; i < ary.length; i++) {
    window += ary[i] - ary[i - num];
    max = Math.max(window, max);
  }
  return max;
};

maxSubarraySum = (ary, num) => {
  let max = 0;
  for (let i = 0; i < num; i++) max += ary[i];
  for (let i = num, j = max; i < ary.length; i++) {
    j += ary[i] - ary[i - num];
    max = Math.max(max, j);
  }
  return max;
};

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 5], 3)); // 19
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 15], 2)); // 16

// ----> Given a binary array, find the maximum number zeros in an
// ----> array with one flip of a subarray allowed. A flip operation
// ----> switches all 0s to 1s and 1s to 0s.

maxZero = (ary) => {
  let flipped = false,
    start = 0,
    lastFlip = 0,
    count = 0;

  for (let i = 0; i < ary.length; i++) {
    if (ary[i] !== 0) {
      if (!flipped) {
        flipped = true;
        lastFlip = i + 1;
      } else if (ary[i - 1] !== 1) {
        start = lastFlip;
        flipped = false;
      }
    }
    count = Math.max(count, i + 1 - start);
  }
  return count;
};

maxZero = (ary) => {
  let max = 0,
    start = 0,
    flipped = false,
    lastFlip;

  for (let i = 0; i < ary.length; i++) {
    if (ary[i]) {
      if (!flipped) {
        flipped = true;
        lastFlip = i;
      } else if (!ary[i - 1]) {
        start = lastFlip + 1;
        flipped = false;
      }
    }
    max = Math.max(max, i - start + 1);
  }

  return max;
};

// console.log(maxZero([0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1])); // 8
// console.log(maxZero([0, 0, 0, 1, 0, 1])); // 5

// ----> This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the
// ----> integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

function minSubArrayLen(nums, sum) {
  let min = Infinity,
    count = 0,
    start = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (count >= sum) {
      while (count >= sum) {
        count -= nums[start];
        start++;
      }
      start--;
      count += nums[start];
      min = Math.min(min, i - start + 1);
    }
  }
  if (min === Infinity) return 0;
  return min;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 because [4,3]
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 [5,4]
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 63, 12, 21], 52)); // 1 [63]
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 92)); // 0 []

// what is the max profit that you can make when buying
// one day and selling on another day

appleStocks = (stockPrices) => {
  let max = stockPrices[1] - stockPrices[0],
    current;

  for (let i = 2; i < stockPrices.length; i++) {
    current = stockPrices[i] - stockPrices[i - 1];
    if (current > current + max) max = current;
    else max = Math.max(max, current + max);
  }
  return max;
};

appleStocks = (prices) => {
  let max = -Infinity,
    current;

  for (let i = 1; i < prices.length; i++) {
    current = prices[i] - prices[i - 1];
    if (current > max + current) max = current;
    else max = Math.max(max, max + current);
  }
  return max;
};

const stockPrices = [10, 7, 5, 8, 11, 9];

console.log(appleStocks(stockPrices));

// Returns 6 (buying for $5 and selling for $11)

// ----> Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
// ----> In one operation, you can choose any character of the string and change it to any other uppercase English character.
// ----> Find the length of the longest sub - string containing all repeating letters you can get after performing the above operations.

function longestRepeatChar() {}

// console.log(longestRepeatChar("ABAB", 2)); // 4
// console.log(longestRepeatChar("AABABBA", 1)); // 4

// ----> Find the minimum window in str1 which will contain all the characters in str2 in complexity O(n).

function minWindow(str1, str2) {
  let min = 0,
    found;
}

// console.log(minWindow("ADOBECODEBANC", "BANC")); // 4

console.log(productNums(nums)); // [84, 12, 28, 21]
