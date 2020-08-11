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
