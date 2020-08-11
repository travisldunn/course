class Heap {
  constructor(type = "min") {
    this.storage = [];
    this.type = type === "min" ? "min" : "max";
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  compare(parent, child) {
    if (this.type === "min") {
      return this.storage[parent] <= this.storage[child];
    }
    return this.storage[parent] > this.storage[child];
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  insert(value) {
    this.storage.push(value);
    this.bubbleUp();
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  peek() {
    return this.storage[0];
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  remove() {
    this.swap(0, this.storage.length - 1);
    const result = this.storage.pop();
    this.bubbleDown();
    return result;
  }

  // Helper methods
  swap(a, b) {
    [this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
  }

  getParent(child) {
    return Math.floor((child - 1) / 2);
  }

  getChild(parent) {
    let left = parent * 2 + 1;
    if (left >= this.storage.length - 1 || this.compare(left, left + 1)) {
      return left;
    }
    return left + 1;
  }

  bubbleUp() {
    let child = this.storage.length - 1;
    let parent;

    parent = this.getParent(child);
    while (child > 0 && !this.compare(parent, child)) {
      this.swap(parent, child);
      child = parent;
      parent = this.getParent(child);
    }
  }

  bubbleDown() {
    let parent = 0;
    let child = this.getChild(parent);

    while (child < this.storage.length - 1 && !this.compare(parent, child)) {
      this.swap(parent, child);
      parent = child;
      child = this.getChild(parent);
    }
  }
}

let heap = new Heap("max");
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.remove();
console.log(heap);
