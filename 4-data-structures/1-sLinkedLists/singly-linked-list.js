class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let node = this.head,
      prev = node;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return node;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  search(val) {
    let current = this.head,
      idx = 0;
    while (current) {
      if (current.val === val) return idx;
      idx++;
      current = current.next;
    }
    return -1;
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    if (idx === this.length - 1) return this.tail;
    let current = this.head;
    while (idx--) current = current.next;
    return current;
  }

  set(idx, val) {
    const node = this.get(idx);
    if (node) node.val = val;
    return !!node;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    let node = new Node(val);
    let prev = this.get(idx - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return this.pop();
    if (idx === 0) return this.shift();
    let prev = this.get(idx - 1),
      removed = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return removed;
  }

  reverse() {
    if (!this.head) return undefined;
    let current = this.head,
      prev = null,
      temp;
    while (current) {
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    temp = this.head;
    temp.next = null;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  printBackwards() {
    (function recurse(node) {
      if (!node) return;
      recurse(node.next);
      console.log(node.val);
    })(this.head);
  }

  swapValues(a, b) {
    if (!this.head || a === b) return head;
    const aN = this.get(this.search(a));
    const bN = this.get(this.search(b));

    if (aN && bN) {
      let temp = aN.val;
      aN.val = bN.val;
      bN.val = temp;
      return this;
    }
    return null;
  }

  fromLast(n) {
    let slow = this.head,
      fast = this.head;
    while (n--) fast = fast.next;
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }

  isCircular() {
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }

  midpoint() {
    let slow = this.head;
    let fast = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  randomNodeVal() {
    let count = 0,
      result,
      current = this.head;

    while (current) {
      count++;
      if (Math.random() < 1 / count) result = current.val;
      current = current.next;
    }

    return result;
  }
}

const list = new SLL();
list.push("5");
list.push("27");
list.push("6");

// Methods

// push
// pop
// shift
// unshift
// search
// get
// set
// insert
// remove
// reverse
// print
// printBackwards
// swap
// fromLast
// isCircular
// midpoint
// randomNodeValue
