// Given a sing s that consists of only uppercase
// English letters, you can perform at most k operations on that sing.
// In one operation, you can choose any character of the
// sing and change it to any other uppercase English character.
// Find the length of the longest sub - sing containing all
// repeating letters you can get after performing the above operations.

const characterReplacement = (s, k) => {
  let count = {},
    mostFreq = 0,
    max = 0,
    start = 0;

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = ++count[s[i]] || 1;
    mostFreq = Math.max(mostFreq, count[s[i]]);
    while (i - start + 1 - mostFreq > k) {
      --count[s[start]];
      start++;
    }
    max = Math.max(max, i - start + 1);
  }

  return max;
};

console.log(characterReplacement("AAAFKLAABAABBAXCSF", 2)); // 6
console.log(characterReplacement("ABAB", 2)); // 4
