class Heap {
  constructor(type = "min") {
    this.type = type;
    this.data = data;
  }

  insert(val) {
    this.data.push(val);
    this.bubbleUp;
  }

  peek() {
    return this.data[0];
  }

  remove() {
    this.swap(0, this.data.length - 1);
    let result = this.data.pop();
    this.bubbleDown();
    return result;
  }

  bubbleUp() {
    let c = this.data.length - 1;
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

    while (c < this.data.length - 1 && this.compare(c, p)) {
      this.swap(c, p);
      p = c;
      c = this.getC(p);
    }
  }

  getP(c) {
    return Math.floor((c - 1) / 2);
  }

  getC(p) {
    let left = p * 2 + 1;
    if (left > this.data.length - 1 || compare(left, left + 1)) return left;
    return left + 1;
  }

  compare(c, p) {
    if (this.type === min) return c <= p;
    return c > p;
  }

  swap(c, p) {
    [this.data[c], this.data[p]] = [this.data[p], this.data[c]];
  }
}

const heap = new Heap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
