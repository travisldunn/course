// Write a function which accepts a string and returns the
// length of the longest substring with all distinct characters.

findLongestSubstring = (str) => {
  let found = {},
    max = 0;

  for (let l = 0, r = 0; r < str.length; r++) {
    if (found[str[r]]) l = Math.max(l, found[str[r]] + 1);
    found[str[r]] = r;
    max = Math.max(max, r - l + 1);
  }
  return max;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbbb")); // 1
