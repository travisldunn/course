const nums = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

findDupe = (arr) => {
  let left = 0,
    right = arr.length,
    mid;

  while (right >= left) {
    mid = Math.floor((right + left) / 2);
    if (arr[mid] === arr[mid + 1] || arr[mid] === arr[mid - 1]) return arr[mid];
    if (arr[mid] - 1 === mid) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

console.log(findDupe(nums));
