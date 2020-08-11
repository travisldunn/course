/*
 *  Problem:  Powerset
 *
 *  Prompt:   Given a set S, return the powerset P(S), which is
 *            a set of all subsets of S.
 *
 *  Input:    A String
 *  Output:   An Array of Strings representing the power set of the input
 *
 *  Example:  S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']
 *
 *  Note:     The input string will not contain duplicate characters
 *            The letters in the subset string must be in the same order
 *            as the original input.
 */

function powerset(str) {
  let results = [];

  function traverse(build, depth) {
    if (depth === str.length) {
      results.push(build);
      return;
    }
    traverse(build, depth + 1);
    traverse(build + str[depth], depth + 1);
  }

  traverse("", 0);
  return results;
}
