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
      let n = this.list[v].pop();
      this.removeEdge(v, n);
    }
    delete this.list[v];
  }

  depthFirstSearchR(start) {
    const data = [],
      seen = {};

    const dfs = (v) => {
      if (!v) return null;
      seen[v] = true;
      data.push(v);
      for (let n of this.list[v]) if (!seen[n]) return dfs(n);
    };
    dfs(start);

    return data;
  }

  depthFirstSearchI(start) {}

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

// console.log(g.depthFirstSearchI("Aspen"));
// console.log(g.breadthFirstSearch("Aspen"));
console.log(g.list);
