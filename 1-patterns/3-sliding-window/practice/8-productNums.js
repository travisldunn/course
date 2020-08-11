// find the product of all other numbers in the array in O(n+n) time;

let nums = [1, 7, 3, 4];

productNums = (nums) => {
  let products = [],
    temp = 1;

  for (let i = 0; i < nums.length; i++) {
    products[i] = temp;
    temp *= nums[i];
  }

  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] *= temp;
    temp *= nums[i];
  }

  return products;
};

console.log(productNums(nums)); // [84, 12, 28, 21]
