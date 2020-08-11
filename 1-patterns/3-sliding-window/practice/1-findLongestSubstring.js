// Write a function called findLongestSubstring, which accepts
// a string and returns the length of the longest substring with
// all distinct characters.

findLongestSubstring = (str) => {
  let found = {},
    max = 0,
    start = 0;

  for (let i = 0; i < str.length; i++) {
    if (found[str[i]]) start = Math.max(start, found[str[i]]);
    max = Math.max(max, i - start + 1);
    found[str[i]] = i + 1;
  }
  return max;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbbb")); // 1
