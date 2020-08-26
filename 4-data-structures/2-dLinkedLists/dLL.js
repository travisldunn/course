class Node {
  constructor(val) {
    this.value = val;
    this.previous = null;
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
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    --this.length;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      oldTail.previous = null;
    }
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    --this.length;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    return oldHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let count, current;
    if (index < this.length / 2) {
      current = this.head;
      count = 0;
      while (count !== index) {
        current = current.next;
        ++count;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.previous;
        --count;
      }
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.value = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let node = new Node(val);
    let before = this.get(index - 1);
    let after = before.next;

    before.next = node;
    node.previous = before;
    node.next = after;
    after.previous = node;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();

    let remove = this.get(index);
    remove.previous.next = remove.next;
    remove.next.previous = remove.previous;
    remove.previous = null;
    remove.next = null;
    --this.length;

    return remove;
  }

  reverse() {
    let current = this.tail;
    let temp = null;
    while (current) {
      current.next = current.previous;
      current.previous = temp;
      temp = current;
      current = current.next;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    this.tail.next = null;
    this.head.previous = null;

    return this;
  }
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

// dub.pop();
// dub.pop();
// dub.pop();
// dub.pop();
// dub.pop();
// dub.pop();

// dub.shift();
// dub.unshift("my");

// console.log(dub.remove(1));
dub.reverse();
console.log(dub);
