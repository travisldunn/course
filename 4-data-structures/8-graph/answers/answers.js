// Build an unweighted graph

class Graph {
  constructor() {
    // adjacency list
    this.list = {};
  }

  addVertex(v) {
    if (!this.list[v]) this.list[v] = [];
  }
  addEdge(v1, v2) {
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.list[v1] = this.list[v1].filter((v) => v !== v2);
    this.list[v2] = this.list[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    while (this.list[v].length) {
      const adjV = this.list[v].pop();
      this.removeEdge(v, adjV);
    }
    delete this.list[v];
  }

  depthFirstSearchR(start) {
    const result = [],
      visited = {};

    const dfs = (v) => {
      if (!v) return null;
      visited[v] = true;
      result.push(v);
      for (let n of this.list[v]) if (!visited[n]) return dfs(n);
    };
    dfs(start);

    return result;
  }

  depthFirstSearchI(start) {
    const result = [],
      visited = {},
      stack = [start];
    let v;
    visited[start] = true;
    while (stack.length) {
      v = stack.pop();
      result.push(v);
      for (let n of this.list[v]) {
        if (!visited[n]) {
          visited[n] = true;
          stack.push(n);
        }
      }
    }

    return result;
  }

  breadthFirstSearch(start) {
    const result = [],
      visited = {},
      queue = [start];
    let v;
    visited[start] = true;

    while (queue.length) {
      v = queue.shift();
      result.push(v);
      for (let n of this.list[v]) {
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      }
    }

    return result;
  }
}

let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong");
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");

// console.log(g.depthFirstSearchR("Aspen"));
// console.log(g.depthFirstSearchI("Aspen"));

// console.log(g.breadthFirstSearch("Aspen"));

("use strict");

//  Homework 16 - Graph Traversal
//
//  Instructions: We will be exploring further graph traversal problems in this
//  homework file. You'll want to go through the corresponding learning material
//  on the Data Structures and Algorithms course at {{INSERT LINK}}
//
//  You'll want to use the following classes in your code:
//       - Graph
//       - Stack
//       - Queue

// Helper Data Structures and Algorithms

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    this.insert(value, this.length);
  }

  prepend(value) {
    this.insert(value, 0);
  }

  insert(value, index) {
    if (index < 0 || index > this.length) {
      return;
    }
    let newNode = new ListNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
    }

    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    let result;
    if (this.length === 1) {
      result = this.head;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      result = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      result = prev.next;
      prev.next = prev.next.next;
      if (index === this.length - 1) {
        this.tail = prev;
      }
    }
    this.length--;
    return result;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

class Queue {
  constructor() {
    this.list = new LinkedList();
    this.length = 0;
  }

  enqueue(value) {
    this.list.append(value);
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return;
    }
    this.length--;
    return this.list.remove(0).value;
  }

  peek() {
    return this.list.head.value;
  }
}

// Graph Class: Directed, Unweighted, Adacency List
class Graph {
  constructor() {
    this.storage = new Map();
  }

  addVertex(value) {
    if (this.storage.get(value) === undefined) {
      this.storage.set(value, new Set());
    }
  }

  removeVertex(value) {
    if (this.storage.get(value) === undefined) {
      return;
    }
    // remove all edge references to vertex
    for (let vertex in this.storage) {
      let neighbors = this.storage.get(vertex);
      neighbors.delete(value);
    }
    // remove vertex from storage
    this.storage.delete(value);
  }

  addEdge(a, b) {
    if (this.storage.get(a) === undefined) {
      this.addVertex(a);
    }
    if (this.storage.get(b) === undefined) {
      this.addVertex(b);
    }
    this.storage.get(a).add(b);
  }

  removeEdge(a, b) {
    if (this.storage.get(a) === undefined) {
      return;
    }
    this.storage.get(a).delete(b);
  }

  isVertex(vertex) {
    return this.storage.get(vertex) !== undefined;
  }

  neighbors(vertex) {
    if (this.storage.get(vertex) !== undefined) {
      return this.storage.get(vertex);
    }
  }

  vertices() {
    let keys = [];
    this.storage.forEach((value, key) => {
      keys.push(key);
    });
    return keys;
  }
}

// generate graph from list of edges
function generateAdjacencyList(edges) {
  let graph = new Graph();

  let u, v;
  edges.forEach((edge) => {
    [u, v] = edge;
    graph.addEdge(u, v);
  });

  return graph;
}

function topologicalSort(graph) {
  let visited = new Set();
  let results = [];

  function dfs(current) {
    if (visited.has(current)) {
      return;
    }

    visited.add(current);
    let neighbors = graph.neighbors(current);
    for (let neighbor of neighbors) {
      dfs(neighbor);
    }
    results.push(current);
  }
  let vertices = graph.vertices();
  for (let i = 0; i < vertices.length; i++) {
    dfs(vertices[i]);
  }
  return results.reverse();
}

/*
 *  Predict Order
 *
 *  Practice visualizing the order of traversal for each of the following
 *  graphs. Write a valid ordering if 1) BFS, 2) DFS (pre-order), and
 *  3) topological sort is performed. The starting vertex for BFS and DFS
 *  is vertex 0
 *
 *  There are no tests for this particular problem. Additionally, for some of
 *  these graphs, there are multiple possible solutions
 *
 *
 *
 *  Graph A: https://res.cloudinary.com/outco/image/upload/v1519855558/graph-traversal/Paper.Graph_Traversal.10.png
 *
 *  1) BFS: {0,1,2,3,4,5}
 *  2) DFS: {0,1,3,4,5,2}
 *  3) Topological sort: {0,2,1,3,4,5}
 *
 *  Graph B: https://res.cloudinary.com/outco/image/upload/v1519855554/graph-traversal/Paper.Graph_Traversal.11.png
 *
 *  1) BFS: {0,1,2,4,3}
 *  2) DFS: {0,1,3,4,2}
 *  3) Topological sort: {0,2,1,3,5,4}
 *
 *  Graph C: https://res.cloudinary.com/outco/image/upload/v1519855557/graph-traversal/Paper.Graph_Traversal.12.png
 *
 *  1) BFS: {0,1,2,3,4,5,6,7}
 *  2) DFS: {0,2,4,5,7,6,1,3}
 *  3) Topological sort: {0,1,3,2,4,6,5,7}
 *
 */

/*
 *  Redundant Connection
 *
 *  Given a directed graph (list of edges), where if one of the edges is
 *  removed, the graph will become a tree.  Return that edge.
 *
 *  Parameters:
 *
 *  Input: edges: [[Integer]]
 *  Output: [Integer]
 *
 *  Examples:
 *
 * `{{1, 2}, {1, 3}, {2, 3}} --> {2, 3}`
 * `{{1, 2}, {2, 3}, {2, 4}, {4, 5}, {5, 2}} --> {5, 2}`
 *
 *  Note:
 *  - For some inputs, there coule be multiple
 *    correct solutions
 *
 *  Resources:
 *  - https://leetcode.com/problems/redundant-connection-ii/description/
 *
 *
 */

function redundantConnection(edgeList) {
  let candidates = [];
  let parent = {};
  let N = edgeList.length;

  // Find Candidate Nodes;
  edgeList.forEach((edge) => {
    let origin = edge[0];
    let destination = edge[1];

    if (destination in parent) {
      candidates.push([parent[destination], destination]);
      candidates.push(edge);
    } else {
      parent[destination] = origin;
    }
  });

  // Function To Find Root
  function orbit(node) {
    let seen = new Set();
    while (node in parent && !seen.has(node)) {
      seen.add(node);
      node = parent[node];
    }
    return [node, seen];
  }

  let root = orbit(1)[0];

  if (candidates.length === 0) {
    let cycle = orbit(root)[1];
    let answer;
    edgeList.forEach((edge) => {
      let origin = edge[0];
      let destination = edge[1];
      if (cycle.has(origin) && cycle.has(destination)) {
        answer = [origin, destination];
      }
    });
    return answer;
  }

  let children = {};

  for (let v in parent) {
    if (children[parent[v]] === undefined) {
      children[parent[v]] = [v];
    } else {
      children[parent[v]].push(v);
    }
  }

  let seen = [true];

  for (let i = 0; i < N; i++) {
    seen.push(false);
  }

  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!seen[node]) {
      seen[node] = true;
      if (children[node] !== undefined) {
        children[node].forEach((child) => {
          stack.push(child);
        });
      }
    }
  }

  for (let i = 0; i < seen.length; i++) {
    if (!seen[i]) {
      return candidates[0];
    }
  }
  return candidates[1];
}

/*
 *  Third Degree Neighbors
 *
 *  Given an undirected graph represented by a list of edges and a start
 *  vertex, return an array of the 3rd degree neighbors.
 *
 *  Parameters:
 *
 *  Input: edges: [[Integer]]
 *  Input: start: Integer
 *  Output: [Integer]
 *
 *  Example:
 *
 *  The following example with start vertex `1`:
 *  Input: `{{1,2},{2,1},{1,3},{3,1},{2,4},{4,2},{3,4},{4,3},
 *           {4,8},{8,4},{4,5},{5,4},{5,6},{6,5},{5,7},{7,5},
 *           {6,7},{7,6},{8,7},{7,8},{8,9},{9,8}}`
 *  Input: 1
 *  Output: `[5,8]` or `[8,5]`     (order does not matter)
 *  Picture here: https://res.cloudinary.com/outco/image/upload/v1519850256/graph-traversal/Paper.Graph_Traversal.2.png
 *
 *
 *
 */

function thirdDegreeNeighbors(edgeList, start) {
  let graph = generateAdjacencyList(edgeList);

  let result = [];
  let queue = new Queue();
  let seen = new Set();

  seen.add(start);
  queue.enqueue([start, 0]);

  while (queue.length) {
    let current = queue.dequeue();
    let val = current[0];
    let distance = current[1];
    if (distance === 3) {
      result.push(val);
    }
    let neighbors = graph.neighbors(val);

    neighbors.forEach((vertex) => {
      if (!seen.has(vertex)) {
        seen.add(vertex);
        queue.enqueue([vertex, distance + 1]);
      }
    });
  }
  return result;
}

/*
 *  Detect Cycle in Graph (Undirected)
 *
 *  Given edges that represent an undirected graph, determine if the graph
 *  has a cycle. A cycle has a minimum of 3 vertices.
 *
 *  Parameters:
 *
 *  Input: edges: [[Integer]]
 *  Output: Boolean
 *
 *  Example:
 *
 *  Input: `{{1,2},{2,1},{2,3},{3,2},{3,1},{1,3},
 *           {3,4},{4,3},{5,4},{4,5},{5,6},{6,5},
 *           {4,7},{7,4}}`
 *  Output: True
 *
 *  Resources:
 *  - https://www.geeksforgeeks.org/detect-cycle-undirected-graph/
 *
 */

function detectCycleInGraph(edgeList) {
  let graph = generateAdjacencyList(edgeList);
  let seen = new Set();
  let queue = [];

  let vertices = graph.vertices();
  for (let vertex of vertices) {
    if (!seen.has(vertex)) {
      seen.add(vertex);
      queue.push(vertex);
    }
    while (queue.length) {
      let current = queue.shift();
      let neighbors = graph.neighbors(current);
      let neighborsVisited = 0;
      let flag = false;
      neighbors.forEach((v) => {
        if (!seen.has(v)) {
          seen.add(v);
          queue.push(v);
        } else {
          neighborsVisited += 1;
        }
        if (neighborsVisited > 1) {
          flag = true;
        }
      });
      if (flag) {
        return flag;
      }
    }
  }
  return false;
}

/*
 *  Friend Circles
 *
 *  A friend circle is a group of people who are direct or indirect friends.
 *  Given a NxN bitset matrix, where a 1 in the i,j coordinate signifies a
 *  friendship between person i and person j, determine how many circles of
 *  friends there are.
 *
 *  Parameters:
 *
 *  Input: Graph: [[Integer]] (adjacency matrix)
 *  Output: Integer
 *
 *  Example:
 *
 *  Input: `{{1,1,0}, {1,1,0}, {0,0,1}}`
 *  Output: 2
 *
 *  Input: `{{1,1,0}, {1,1,1}, {0,1,1}}`
 *  Output: 1
 *
 *  Resources:
 *  - https://leetcode.com/problems/friend-circles/description/
 *
 */

function friendCircles(matrix) {
  let seen = new Set();
  let circles = 0;
  let queue = [];

  for (let row = 0; row < matrix.length; row++) {
    let person = row;

    if (!seen.has(person)) {
      queue.push(person);
      seen.add(person);
      circles += 1;
    }

    while (queue.length) {
      let current = queue.shift();
      for (let friend = 0; friend < matrix[current].length; friend++) {
        if (matrix[current][friend] === 1 && !seen.has(friend)) {
          seen.add(friend);
          queue.push(friend);
        }
      }
    }
  }
  return circles;
}

/*
 *  Longest Path I
 *
 *  Given a DAG (directed acyclic graph), find the longest path in the graph.
 *
 *  Parameters:
 *
 *  Input: Graph: [[Integer]] (adjacency matrix)
 *  Output: Integer
 *
 *  Example:
 *
 *  Input: {{1,2},{2,3},{1,3}}
 *  Output: {1,2,3}
 *
 *  Input: {{6,5},{6,4},{5,4},{4,3},{2,3},{1,2},{4,1}}
 *  Output: {6,5,4,1,2,3}
 *
 *  Resources:
 *  - https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/
 *
 * Note: This problem currently does not have tests
 */

function longestPath(graph) {
  let result = 0;
  let visited = new Set();

  function dfs(current, depth) {
    if (visited.has(current)) {
      return;
    }
    result = Math.max(result, depth);
    visited.add(current);
    let neighbors = graph.neighbors(current);
    for (let neighbor of neighbors) {
      dfs(neighbor, depth + 1);
    }
    visited.delete(current);
  }
  let vertices = graph.vertices();
  for (let i = 0; i < vertices.length; i++) {
    dfs(vertices[i], 0);
  }
  return result;
}

/*
 *  Course Schedule
 *
 *  A collection of courses at a University has prerequisite courses that must
 *  be taken first.  Given an array of course pairs [A, B] where A is the
 *  prerequisite of B, determine a valid sequence of courses a student can
 *  take to complete all the courses.
 *
 *  Parameters:
 *
 *  Input: courses: [[String]]
 *  Output: [String]
 *
 *  Example:
 *
 *  Input: {{"a","b"},{"a","c"},{"b","d"},{"c","d"}}
 *  Output: {"a","b","c","d"} or {"a","c","b","d"}
 *
 *  Input: {{"a","b"},{"b","c"},{"c","d"}}
 *  Output: {"a","b","c","d"}
 *
 *
 *
 */

function courseSchedule(courseList) {
  let graph = generateAdjacencyList(courseList);
  return topologicalSort(graph);
}

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
