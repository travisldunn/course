/*
 *  Cryptic Dictionary
 *
 *  An array of strings in lexicographical (alphabetical) order has been put
 *  through a [simple substitution cypher](https://en.wikipedia.org/wiki/Substitution_cipher)
 *  where each letter is now substituted for another letter. Determine a valid
 *  ordering of characters in the cypher.
 *
 *  Parameters:
 *
 *  Input: words: [String]
 *  Output: [String]
 *
 *  Example:
 *
 *  Input: {"baa", "abcd", "abca", "cab", "cad"}
 *  Output: {"b", "d", "a", "c"}
 *
 *  Input: {"caa", "aaa", "aab"}
 *  Output: {"c", "a", "b"}
 *
 *  Source: https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/
 */

function crypticDictionary(wordList) {
  let result = [];
  for (let i = 0; i < wordList.length - 1; i++) {
    let word = wordList[i];
    let nextWord = wordList[i + 1];
    result.push(firstLetterDifference(word, nextWord));
  }
  let graph = generateAdjacencyList(result);
  return topologicalSort(graph);
}

function firstLetterDifference(word1, word2) {
  for (
    let letter = 0;
    letter < Math.min(word1.length, word2.length);
    letter++
  ) {
    if (word1[letter] !== word2[letter]) {
      return [word1[letter], word2[letter]];
    }
  }
}
