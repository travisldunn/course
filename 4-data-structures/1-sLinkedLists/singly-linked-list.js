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

  get(idx) {
    if (idx > this.length || !this.length) return undefined;
    if (idx === this.length) return this.tail;
    let current = this.head;
    while (idx--) current = current.next;
    return current;
  }

  set(idx, val) {
    const node = this.get(idx);
    if (node) node.val = val;
    return node ? true : false;
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
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  reverse(head) {
    let node = head,
      previous,
      tmp;

    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next;

      // reverse pointer
      node.next = previous;

      // step forward in the list
      previous = node;
      node = tmp;
    }

    return previous;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
