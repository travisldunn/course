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
