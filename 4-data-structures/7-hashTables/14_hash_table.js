/*
 *  Homework 14 - Hash Table
 *
 *  Problem: Hash Table
 *
 *  Prompt: Create a hash table class using separate chaining.
 *
 *  The HashTable will have the following properties:
 *
 *         storage:  {Array} - an array of arrays.
 *         buckets:  {Integer} - the maximum number of buckets that your
 *                   storage can contain. Initially set to 8.
 *           size:   {Integer} count of key-value pairs in the storage
 *
 *  The HashTable will also have the following methods:
 *
 *           hash:   Method that takes a key and bucket number and provides a
 *                   hashed value. The dbjb2 hashing function has been
 *                   provided.
 *
 *                   Input:      key {String}
 *                   Input:      buckets {Integer}
 *                   Output:     index {Integer}
 *
 *         insert:   Method that adds a key-value pair into the storage. If the
 *                   key already exists, the value should be updated. Use
 *                   separate chaining to handle collisions.
 *
 *                   Input:      key {String}
 *                   Input:      value {String}
 *                   Output:     {Undefined}
 *
 *            get:   Method that given a key, return its corresponding value.
 *                   If the key does not exist, return null.
 *
 *                   Input:      key {String}
 *                   Output:     value {String}
 *
 *         remove:   Method that takes a key as its input, and looks for the
 *                   and removes the key-value pair from the bucket.
 *
 *                   Input:      key {String}
 *                   Output:     {Undefined}
 *
 *         resize:   If the load factor reaches a critical 0.75 or higher,
 *                   double the number of buckets. If the load factor is 0.25
 *                   or less, half the number of buckets. Make sure the number
 *                   of buckets do not fall below 8 and re-index all key-value
 *                   pairs if bucket size is changed.
 *
 *                   Input:      key {String}
 *                   Output:     {Undefined}
 *
 *  Input: N/A
 *  Output: A HashTable instance
 */

"use strict";

class HashTable {
  constructor() {
    this.storage = [];
    this.buckets = 8;
    this.size = 0;
  }

  // Time Complexity: O(K) - where K is the length of the key
  // Auxiliary Space Complexity: O(1)
  hash(key, buckets) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i);
      hash = (hash << 5) + hash + char;
    }
    return hash % buckets;
  }

  // Time Complexity (amortized): O(K+N) - where K is the length of the key
  // Auxiliary Space Complexity (amortized): O(1)
  insert(key, value) {
    const index = this.hash(key, this.buckets);
    if (this.storage[index] === undefined) {
      this.storage[index] = [];
    }
    const bucket = this.storage[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.size++;
    this.resize();
  }

  // Time Complexity: O(K+N) - where K is the length of the key
  // Auxiliary Space Complexity: O(1)
  get(key) {
    const index = this.hash(key, this.buckets);
    const bucket = this.storage[index];
    if (bucket === undefined) {
      return null;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return null;
  }

  // Time Complexity (amortized): O(K+N) - where K is the length of the key
  // Auxiliary Space Complexity (amortized): O(1)
  remove(key) {
    const index = this.hash(key, this.buckets);
    const bucket = this.storage[index];
    if (bucket === undefined) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        this.resize();
      }
    }
  }

  // Time Complexity: O(N)
  // Auxiliary Space Complexity: O(N)
  resize() {
    const loadFactor = this.size / this.buckets;
    if (loadFactor > 0.25 && loadFactor < 0.75) {
      return;
    }
    if (loadFactor <= 0.25 && this.buckets === 8) {
      return;
    }

    let temp = this.storage;
    this.storage = [];

    // expand or reduce number of buckets
    this.buckets *= loadFactor >= 0.75 ? 2 : 0.5;

    // insert each key-value pair from old storage to new storage
    for (let i = 0; i < temp.length; i++) {
      let bucket = temp[i] || [];
      for (let j = 0; j < bucket.length; j++) {
        this.size--;
        this.insert(...bucket[j]);
      }
    }
  }
}
