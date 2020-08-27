class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  peek() {
    return this.first ? this.first.val : null;
  }
}

let queue = new Queue();

queue.enqueue("mother");
queue.enqueue("fucken");
queue.enqueue("shit");
queue.enqueue("bricks");

module.exports = Queue;
