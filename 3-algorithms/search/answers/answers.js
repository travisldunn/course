// Linear Search is the act of comparing each element of the array with the querry
// O(n) linear

linearSearch = (ary, querry) => {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] === querry) return i;
  }
  return -1;
};

// console.log(linearSearch([0, 1, 2, 3, 4, 5, 6, 7], 5));

// Binary Search is the act of cutting your search group in half after each step
// O(log n) logarithmic

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

biSearch = (arr, val) => {
  let left = 0,
    right = arr.length,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (val === arr[mid]) return mid;
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};

console.log(biSearch(primes, 23)); // 8

naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0, j = 0; i < long.length; i++) {
    if (long[i] === short[j]) ++j;
    if (j === short.length) {
      count++;
      j = 0;
    }
  }
  return count;
};

// console.log(naiveSearch("lorie loledloilol", "lol"));
