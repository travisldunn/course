class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
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
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i > this.length) return undefined;
    let current, count;
    if (i < this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== i) {
        count++;
        current = current.next;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== i) {
        count--;
        current = current.prev;
      }
    }
    return current;
  }

  set(i, val) {
    let node = this.get(i);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return undefined;
    if (i === 0) return !!this.unshift();
    if (i === this.length) return !!this.push();

    const node = new Node(val),
      prev = this.get(i - 1),
      next = prev.next;

    prev.next = node;
    node.prev = prev;
    node.next = next;
    next.prev = node;

    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i > this.length) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length) return this.pop();

    const remove = this.get(i);
    remove.prev.next = remove.next;
    remove.next.prev = remove.prev;
    remove.prev = null;
    remove.next = null;
    this.length--;

    return remove;
  }

  reverse() {}
}

let dub = new DLL();

dub.push("fart");
dub.push("nuggets");
dub.push("for");
dub.push("life");
dub.push("fun");
dub.push("stuff");
dub.push("buds");
dub.push("dudes");

console.log(dub.set(1, "alkdjk"));
