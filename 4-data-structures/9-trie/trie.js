/**
 *  Homework 11 - Trie
 *
 *  TrieNode class
 *
 *  Prompt:    Create a TrieNode class
 *             The TrieNode class should contain the following properties:
 *
 *                 value:   {Character} - default null
 *                  next:   {HashTable}
 *                   end:   {Boolean}
 *
 *
 *               Example:   let sample = new TrieNode("b")
 *                          sample.value     // "b"
 *                          sample.end       // false
 *
 *  Trie class
 *
 *  Prompt:     Create a Trie class
 *              The Trie class should contain the following properties:
 *
 *                  root:   {TrieNode}
 *
 *              The Trie class should also contain the following methods:
 *
 *                insert:   A method that adds a word.
 *
 *                          Input:     word {String}
 *                          Output:    {undefined}
 *
 *                isWord:   A method that checks whether a word is in the trie.
 *
 *                          Input:     word {String}
 *                          Output:    {Boolean}
 *
 *              isPrefix:   A method that checks whether an input is a prefix of
 *                          a word in the string.
 *
 *                          Input:     word {String}
 *                          Output:    {Boolean}
 *
 *            startsWith:   A method that returns all words that starts with an
 *                          input word.
 *
 *                          Input:     word {String}
 *                          Output:    {Array of Strings}
 *
 *          EXTRA CREDIT:
 *                remove:   Removes a word from the trie.
 *
 *                          Input:     word {String}
 *                          Output:    {undefined}
 */

"use strict";

class TrieNode {
  constructor(value = null) {
    this.value = value;
    this.next = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    let letter;
    for (let i = 0; i < word.length; i++) {
      letter = word[i];
      if (current.next[letter] === undefined) {
        current.next[letter] = new TrieNode(letter);
      }
      current = current.next[letter];
    }
    current.end = true;
  }

  isWord(word) {
    const current = this._search(word);
    return current != null && current.end;
  }

  isPrefix(word) {
    const current = this._search(word);
    return current != null;
  }

  startsWith(word) {
    const current = this._search(word);
    if (current === null) {
      return [];
    }
    let results = this._traverseNode(current);
    for (let i = 0; i < results.length; i++) {
      results[i] = word + results[i];
    }
    return results;
  }

  remove(word) {
    if (word === "") {
      return;
    }
    let current = this.root;
    let stack = [];

    for (let i = 0; i < word.length; i++) {
      stack.push(current);
      current = current.next[word[i]];
      if (current === undefined) {
        return;
      }
    }

    current.end = false;
    if (Object.keys(current.next).length > 0) {
      return;
    }

    let previousLetter;
    while (!current.end && stack.length > 0) {
      previousLetter = current.value;
      current = stack.pop();
      delete current.next[previousLetter];
    }
  }

  _search(word) {
    let current = this.root;
    let letter;
    for (let i = 0; i < word.length; i++) {
      letter = word[i];
      if (current.next[letter] === undefined) {
        return null;
      }
      current = current.next[letter];
    }
    return current;
  }

  _traverseNode(node) {
    let results = [];

    function dfs(current, path) {
      if (current === undefined) {
        return;
      }
      if (current.end) {
        results.push(path);
      }
      for (let key in current.next) {
        dfs(current.next[key], path + key);
      }
    }

    dfs(node, "");
    return results;
  }
}
