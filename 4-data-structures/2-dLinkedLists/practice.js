class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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

  pop() {}

  shift() {}

  unshift(val) {}

  get(i) {}

  set(i, val) {}

  insert(i, val) {}

  remove(i) {}

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

console.log(dub);
