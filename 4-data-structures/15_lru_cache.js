/*
 * Homework 15 - LRU Cache
 */

/*
 *
 *  Instructions: LRU Cache is a popular and challenging algorithm question
 *                commonly asked during whiteboarding and tech screen sessions.
 *
 *                While difficult, this exercise is a good problem to test your
 *                ability to build and manipulate data structures.
 *
 *
 *  LRU Cache
 *
 *                Design and implement a data structure for a Least Recently
 *                Used (LRU) Cache.
 *
 *                This implementation involves a doubly linked list and a hash map.
 *
 *          NOTE: A LRU caching scheme is designed to remove the least recently
 *                used item when a new item is added to the cache which is
 *                currently at or has just reached capacity.
 *
 *                An item is considered to be recently used if it has just been
 *                accessed or added.
 *
 *          I.  Node Class
 *              Create a Node class
 *
 *              The Node class should contain the following properties:
 *              key: {Integer}
 *              value: {Integer}
 *              previous: {Node} (initially None)
 *              next: {Node} (initially None)
 *
 *         II.  LRUCache Class
 *              Create an LRUCache class
 *
 *              The LRUCache class should contain the following properties:
 *              capacity: {Integer}
 *              count: {Integer} (initially 0)
 *              cache: {Hash Table} The keys represent unique ids of each node,
 *                                  and the values represent the node objects
 *                                  that possess those keys.
 *              head: {Node}
 *              tail: {Node}
 *
 *     Your LRU cache should have the following methods:
 *
 *      get(key): Retreives a value from the cache (will always be positive) at
 *                the key if the key exists in the cache, otherwise returns -1.
 *
 * set(key,value): Inserts the value at the key or creates a new key:value entry
 *                if key is not present. When the cache reaches its capacity, it
 *                should invalidate the least recently used item before
 *                inserting a new item.
 *
 *          HINT: Consider what data structure(s) might be neccessary to
 *                implement the LRU Cache
 *
 *     Example:
 *     lruCache = new LRUCache(3);
 *     lruCache.set('doc', 'david');
 *     lruCache.set('cpo', 'joshua');
 *     lruCache.set('ceo', 'andy');
 *
 *     lruCache.get('doc'); => 'david'
 *     lruCache.set('swe', 'ron');
 *     lruCache.get('cpo'); => -1
 *
 *
 */

'use strict';

class Node {

  constructor (key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}


class LRUCache {

  constructor(capacity) {
    this.count = 0;
    this.capacity = capacity;
    this.ref = {};
    this.head = new Node();
    this.tail = new Node();

    this.head.next = this.tail;
    this.tail.previous = this.head;
  };


  addNode(node) {
    node.previous = this.head;
    node.next = this.head.next;
    this.head.next.previous = node;
    this.head.next = node;
  };


  removeNode(node) {
    var preNode = node.previous;
    var nextNode = node.next;
    preNode.next = nextNode;
    nextNode.previous = preNode;
  };


  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  };


  removeFromTail() {
    var cNode = this.tail.previous;
    this.removeNode(cNode);
    return cNode;
  };


  get(key) {
    var cNode = this.ref[key];
    if (cNode !== undefined){
      this.moveToHead(cNode);
      return cNode.value;
    }
    return -1;
  };


  set(key, value) {
    var cNode = this.ref[key];

    if (cNode === undefined){
      var newNode = new Node(key, value);
      this.ref[key] = newNode;
      this.addNode(newNode);

      this.count++;

      if (this.count > this.capacity){
        var cNode = this.removeFromTail();
        delete this.ref[cNode.key];
        this.count--;
      }
    } else {
      cNode.value = value;
      this.moveToHead(cNode);
    }
  };

}

































////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

console.log('LRU Cache tests');
var testCount = [0, 0];

assert(testCount, 'should be able to set and get key-value pairs', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('doc', 'david');
  lruCache.set('cpo', 'joshua');
  lruCache.set('ceo', 'andy');
  var example1 = lruCache.get('doc');
  var example2 = lruCache.get('cpo');
  var example3 = lruCache.get('ceo');
  return example1 === 'david' && example2 === 'joshua' && example3 === 'andy';
});

assert(testCount, 'should be able overwrite values with same keys when using set method', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('student', 'henry');
  lruCache.set('student', 'eliza');
  var example = lruCache.get('student');
  return example === 'eliza';
});

assert(testCount, 'old key value pairs should be removed when capacity has been exceeded', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('dentist', 'akali');
  lruCache.set('doctor', 'swain');
  lruCache.set('lawyer', 'kennan');
  lruCache.set('judge', 'leona');
  return lruCache.get('dentist') === -1;
});

assert(testCount, 'most recently modified/viewed items should be moved to front of LRU cache while stale items are moved to end', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('doc', 'david');
  lruCache.set('cpo', 'joshua');
  lruCache.set('ceo', 'andy');
  lruCache.get('doc');
  lruCache.set('swe', 'ron');
  return lruCache.get('cpo') === -1;
});

assert(testCount, 'should be able to replace multiple stale items', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('one', 1);
  lruCache.set('two', 2);
  lruCache.set('three', 3);
  lruCache.set('four', 4);
  lruCache.set('five', 5);
  lruCache.set('six', 6);
  var ex1 = lruCache.get('one');
  var ex2 = lruCache.get('two');
  var ex3 = lruCache.get('three');
  var ex4 = lruCache.get('four');
  var ex5 = lruCache.get('five');
  var ex6 = lruCache.get('six');
  return ex1 === -1 && ex2 === -1 && ex3 === -1 && ex4 === 4 && ex5 === 5 && ex6 === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
    return false;
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

// custom assert function to handle tests
// Array count : keeps track out how many tests pass and how many total
//   in the form of a two item array i.e., [0, 0]
// String name : describes the test
// Function test : performs a set of operations and returns a boolean
//   indicating if test passed
function assert(count, name, test){
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  var pass = 'false';
  var errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}
