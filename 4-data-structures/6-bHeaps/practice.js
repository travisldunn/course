class Heap {
  constructor(type = "min") {
    this.type = type;
    this.data = [];
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  compare(p, c) {
    if (this.type === "min") return this.data[p] <= this.data[c];
    return this.data[p] > this.data[c];
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  insert(val) {
    this.data.push(val);
    this.bubbleUp();
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  peek() {
    return this.data[0];
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  remove() {
    let end = this.data.length - 1;
    [this.data[0], this.data[end]] = [this.data[end], this.data[0]];
    const result = this.pop();
    this.bubbleDown();
    return result;
  }

  // Helper methods
  swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }

  getParent(child) {
    return Math.floor((child - 1) / 2);
  }

  getChild(parent) {}

  bubbleUp() {
    let c = this.data.length - 1,
      p = Math.floor((c - 1) / 2);

    while (c > 0 && !this.compare(p, c)) {
      [this.data[c], this.data[p]] = [this.data[p], this.data[c]];
      c = p;
      p = Math.floor((c - 1) / 2);
    }
  }

  bubbleDown() {
    let parent = 0,
      child = this.getChild(parent);
  }
}

// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
