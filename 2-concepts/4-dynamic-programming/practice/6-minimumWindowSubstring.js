/*
 * Minimum Window Substring (Sliding Window)
 *
 * Given a string, and a set of characters
 * return the substring representing the SMALLEST
 * window containing those characters.
 *
 * The characters needn't appear in the order in which they are given.
 *
 * If not all the characters are present in the string, return the empty string.
 *
 *
 * Input: str   (String)
 *        chars (String)
 *
 * Output: {String}
 *
 *
 * Example:
 *  Input: "ADOBECODEBANC", "ABC"
 *  Output: "BANC"
 *
 *  Input: "HELLO WORLD", "FOO"
 *  Output: ""
 *
 *
 * Explanation:
 *   Though there are many substrings containing all the characters
 *   "BANC" is the shortest.
 *
 * Assume that there won't be repeated characters in the second string input.
 *
 * Ignore capitalization.
 * (though taking it into account doesn't change the solution much)
 *
 * But as extra credit, how would you handle repeats?
 * Meaning if you were given two "A" characters, a valid window MUST
 * contain two "A"s
 *
 *
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

function minimumWindowSubstring(S, T) {
  let result = [0, Infinity];
  let counts = {};
  let missingCharacters = T.length;

  for (let i = 0; i < T.length; i++) {
    //   Create the counts hash table
    counts[T[i]] = 0;
  }
  let slow = 0;

  for (let fast = 0; fast < S.length; fast++) {
    if (S[fast] in counts) {
      // Check if character at fast index is incounts hash
      if (counts[S[fast]] === 0) {
        // If you haven't seen that character before
        missingCharacters -= 1; // Decrement number of missing characters
      }
      counts[S[fast]] += 1; // And add one to its counts value
    }

    while (missingCharacters === 0) {
      // Shrink window until you have an incomplete set
      if (fast - slow < result[1] - result[0]) {
        //  Updates result range if smaller than previous range
        result[0] = slow;
        result[1] = fast;
      }
      if (S[slow] in counts) {
        counts[S[slow]] -= 1;
        if (counts[S[slow]] === 0) {
          missingCharacters += 1;
        }
      }
      slow += 1;
    }
  }
  return result[1] === Infinity ? "" : S.slice(result[0], result[1] + 1);
}
