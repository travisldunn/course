// Build an unweighted graph

class Graph {
  constructor() {
    // adjacency list
  }

  addVertex() {}

  addEdge() {}

  removeEdge() {}

  removeVertex() {}

  depthFirstSearchR() {}

  depthFirstSearchI() {}

  breadthFirstSearch() {}
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g.depthFirstSearchR("Aspen"));
console.log(g.depthFirstSearchI("Aspen"));

console.log(g.breadthFirstSearch("Aspen"));
