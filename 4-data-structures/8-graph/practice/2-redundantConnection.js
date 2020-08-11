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
