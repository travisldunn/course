// # Graph Traversal - Word Ladder

// #### Prompt

// Given a begin and end word, along with a list of words, return the length
// of the shortest transformation sequence

// #### Examples:

// ```
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log","cog"]

// result = 5

// Reason:
// The shortest transformation sequence from "hit" to "cog" is:

// "hit" -> "hot" -> "dot" -> "dog" -> "cog"

// Because this sequence contains 5 elements, we return 5

// ```

// #### Input:

// `beginWord` = `String`

//     `endWord` = `String`

//         `wordList` = `Array of Strings`

// #### Output:
// `result` = `Integer`

// #### Constraints:

// ** Time **: None

//     ** Space **: None

// All words are the same length

// You can only change one letter at a time

// All words are made of letters in lowercase

// Return 0 if there is no sequence

// No duplicates in word list

// You can assume beginWord and endWord are non - empty and not the same

// endWord is contained in the wordList, but beginWord is not; that is intentional

// #### Resources:

// [Word Ladder](https://en.wikipedia.org/wiki/Word_ladder)

//     [DFS Graph Traversals](http://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/)

//         [BFS Graph Traversals](http://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/)

// #### Hints:

//             Consider breaking this problem into two parts: the first is creating a graph to represent the connections between words, and the second to traverse that graph to find the shortest path

// Think about whether you want to do BFS or DFS and why

// Consider what helper functions you may want to abstract out of your main solution

// There are several different ways to approach this problem, and it might be helpful to go through them after to gain a deeper understanding

function oneDifference(word1, word2) {
  let differences = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      differences++;
    }
    if (differences > 1 || word1 === word2) {
      return false;
    }
  }
  return true;
}

function wordLadder(beginWord, endWord, wordList) {
  let map = {};

  // Step 1: Create the graph, where the vertices are the words
  // and an edge exists between two vertices
  // if those words have one letter difference

  // Solution A: O(N * N * K) time

  for (let i = -1; i < wordList.length; i++) {
    let word;
    if (i === -1) {
      word = beginWord;
    } else {
      word = wordList[i];
    }

    map[word] = [];

    for (let j = 0; j < wordList.length; j++) {
      if (oneDifference(word, wordList[j])) {
        map[word].push(wordList[j]);
      }
    }
  }

  // Step 2: Traverse the graph using BFS
  let queue = [];
  let seen = {};

  queue.push([beginWord, 1]);
  seen[beginWord] = 1;

  while (queue.length > 0) {
    let current = queue.shift();
    let word = current[0];
    let count = current[1];
    let connections = map[word];
    for (let index = 0; index < connections.length; index++) {
      if (!seen[connections[index]]) {
        seen[connections[index]] = count + 1;
        queue.push([connections[index], count + 1]);
      }
    }
  }

  return seen[endWord] || 0;
}

console.log(
  wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
