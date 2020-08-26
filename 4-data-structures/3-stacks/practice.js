class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // unshift
  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }
    return ++this.size;
  }

  // shift
  pop() {
    if (!this.first) return null;
    let oldFirst = this.first;
    this.size--;
    if (!this.size) this.last = null;
    this.first = this.first.next;
    return oldFirst.val;
  }
}

let stack = new Stack();

stack.push("dog");
stack.push("fart");
stack.push("shart");

console.log(stack.pop());

console.log(stack);
