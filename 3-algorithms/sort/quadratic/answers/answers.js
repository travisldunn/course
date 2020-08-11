bubbleSort = (arr) => {
  let size = arr.length - 1;

  //   short circut if array is all sorted
  let swap = false;

  while (size > 0) {
    for (i = 0; i < size; i++) {
      swap = false;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
    //   short circut if array is all sorted
    if (!swap) break;
    --size;
  }

  return arr;
};

// console.log(bubbleSort([3, 2, 7, 4, 3, 18, 23, 13, 77, 2]));

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

// console.log(insertionSort([22, 11, 99, 88, 9, 7, 42]));

selectionSort = (arr) => {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) {
      // short circut
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
};

// console.log(selectionSort([22, 11, 99, 88, 9, 7, 42])); // 7, 9, 11, 22, 42, 88, 99
