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
