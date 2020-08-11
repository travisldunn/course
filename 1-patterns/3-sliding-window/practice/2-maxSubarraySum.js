// ----> Find the max sum of num consective numbers in the array

maxSubarraySum = (ary, num) => {
  let max = 0;
  for (let i = 0; i < num; i++) max += ary[i];
  for (let i = num, temp = max; i < ary.length; i++) {
    temp += ary[i] - ary[i - num];
    max = Math.max(temp, max);
  }
  return max;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 5], 3)); // 19
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 15], 2)); // 16
