merge = (arr1, arr2) => {
  let sorted = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }
  return sorted;
};

merge = (arr1, arr2) => {
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
};

mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

let unsortedArr = [22, 3, 2, 1, 6, 6, 4, 55, 77, 32, 67, 44, 24, 1, 27];
console.log(mergeSort(unsortedArr));

//
//
//

pivot = (arr, start = 0, end = arr.length - 1) => {
  let idx = start,
    pivot = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      ++idx;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  [arr[start], arr[idx]] = [arr[idx], arr[start]];
  return idx;
};

quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

console.log(quickSort([6, 8, 2, 4, 66, 3, 5, 1, 4]));
