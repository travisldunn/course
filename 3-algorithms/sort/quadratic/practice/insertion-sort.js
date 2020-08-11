insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else break;
    }
  }
  return array;
};

console.log(insertionSort([22, 11, 99, 88, 9, 7, 42]));
