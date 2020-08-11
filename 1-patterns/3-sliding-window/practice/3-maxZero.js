// Given a binary array, find the maximum number zeros in an array with one flip
// of a subarray allowed. A flip operation switches all 0s to 1s and 1s to 0s.

maxZero = (ary) => {
  let flipped = false,
    lastFlip,
    start = 0,
    max = 0;

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

console.log(maxZero([0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1])); // 8
console.log(maxZero([0, 0, 0, 1, 0, 1])); // 5
