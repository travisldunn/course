// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the
// integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 because [4,3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 [5,4]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 63, 12, 21], 52)); // 1 [63]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 92)); // 0 []
