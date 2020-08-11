// ----> Check if str1 contains an anagram of strf2

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let chars1 = {},
    chars2 = {};
  for (let c of str1) chars1[c] = ++chars1[c] || 1;
  for (let c of str2) chars2[c] = ++chars2[c] || 1;
  for (let c in chars1) if (chars1[c] !== chars2[c]) return false;
  return true;
}

console.log(isAnagram("ttttratvis", "stivart")); // false
console.log(isAnagram("travisz", "sivartt")); // false
console.log(isAnagram("dog", "god")); // true
