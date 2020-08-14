// Find the minimum window in str1 which will contain
// all the characters in str2 in complexity O(n).

var minWindow = function (s, t) {
  const chars = {};
  for (let c of t) chars[c] = ++chars[c] || 1;
  const numChars = Object.keys(chars).length;

  let matches = 0,
    minWindow = Infinity,
    minWindowStart = 0,
    l = 0;

  for (let r = 0; r < s.length; r++) {
    if (s[r] in chars) {
      chars[s[r]]--;
      if (chars[s[r]] === 0) matches++;
    }
    while (matches === numChars) {
      if (r - l + 1 < minWindow) {
        minWindow = r - l + 1;
        minWindowStart = l;
      }
      if (s[l] in chars) {
        if (chars[s[l]] === 0) matches--;
        chars[s[l]]++;
      }
      l++;
    }
  }
  return minWindow === Infinity ? "" : s.substr(minWindowStart, minWindow);
};

console.log(minWindow("cabwefgewcwaefgcf", "cae")); // cwae
console.log(minWindow("ZZZZZZADOBECBODEANCZZZZZZZ", "BANC")); // CBODEAN
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
