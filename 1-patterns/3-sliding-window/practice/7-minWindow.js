// Find the minimum window in str1 which will contain
// all the characters in str2 in complexity O(n).

function minWindow(str1, str2) {
  let min = Infinity,
    set = new Set(str2.split("")),
    found = {},
    start = 0;

  for (let i = 0, j = 0; i < str1.length; i++) {
    if (set.has(str1[i])) {
      if (!found[str1[i]]) {
        found[str1[i]] = i;
        console.log(found, " found ----------");
      }
      if (found[str1[i]] === start) {
        found[str1[i]] = i;
        start++;
        while (!set.has(str1[start])) {
          start++;
        }
        console.log(start, "start");
      }
    }
    min = Math.min(min, i + 1 - start);
  }

  return min;
}

console.log(minWindow("ADOBECBODEANC", "BANC")); // 7
