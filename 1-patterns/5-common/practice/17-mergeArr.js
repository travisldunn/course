const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

mergeArrays = (ary1, ary2) => {
  let ary = [],
    left = 0,
    right = 0;
  while (left < ary1.length && right < ary2.length) {
    if (ary1[left] < ary2[right]) {
      ary.push(ary1[left]);
      left++;
    } else {
      ary.push(ary2[right]);
      right++;
    }
  }

  if (left < ary1.length) {
    while (left < ary1.length) {
      ary.push(ary1[left]);
      left++;
    }
  } else {
    while (right < ary2.length) {
      ary.push(ary2[right]);
      right++;
    }
  }
  return ary;
};

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
