class Node {
  constructor(val) {
    this.value = val;
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
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    --this.length;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (!this.length) this.tail = null;
    return current;
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    let count = idx;
    let current = this.head;
    while (count) {
      count--;
      current = current.next;
    }
    return current;
  }

  set(idx, val) {
    let node = this.get(idx);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (!this.head || idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    let node = new Node(val);
    let before = this.get(idx - 1);
    node.next = before.next;
    before.next = node;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (!this.head || idx === this.length) return !!this.pop(val);
    if (idx === 0) return !!this.shift(val);

    let before = this.get(idx - 1);
    before.next = before.next.next;
    this.length--;
    return true;
  }
}

const list = new SLL();
list.push("travis");
list.push("dio");
list.push("bowie");

// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift("taco"));
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.insert(1, "dick"));
// list.set(1, "fuck");
// console.log(list.remove(1));
// list.reverse();

reverse = (current) => {
  let previous, temp;
  while (current) {
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
};

console.log(reverse(list.head));

// push
// pop
// shift
// unshift
// get
// set
// insert
// remove
// reverse
// print
