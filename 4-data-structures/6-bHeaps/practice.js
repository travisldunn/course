class Heap {
  constructor(type = "min") {
    this.type = type;
    this.data = [];
  }

  compare(c, p) {
    if (this.type === "min") return this.data[c] >= this.data[p];
    return this.data[c] < this.data[p];
  }

  insert(val) {
    this.data.push(val);
    // console.log(this);
    this.bubbleUp();
    // console.log(this);
  }

  peek() {
    return this.data[0];
  }

  remove() {
    this.swap(0, this.data.length - 1);
    let result = this.data.pop();
    // console.log(this);
    this.bubbleDown();
    // console.log(this);
    return result;
  }

  swap(c, p) {
    [this.data[c], this.data[p]] = [this.data[p], this.data[c]];
  }

  getP(c) {
    return Math.floor((c - 1) / 2);
  }

  getC(p) {
    let left = p * 2 + 1;
    if (left >= this.data.length - 1 || this.compare(left + 1, left)) {
      return left;
    }
    return left + 1;
  }

  bubbleUp() {
    let c = this.data.length - 1,
      p = this.getP(c);
    while (c > 0 && !this.compare(c, p)) {
      this.swap(c, p);
      c = p;
      p = this.getP(c);
    }
  }

  bubbleDown() {
    let p = 0,
      c = this.getC(p);

    while (c < this.data.length - 1 && !this.compare(c, p)) {
      this.swap(c, p);
      p = c;
      c = this.getC(p);
    }
  }
}

const heap = new Heap();

heap.insert(55);
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);

console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
// console.log(heap.remove());
