class Node {}

class DLL {
  constructor() {}

  push(val) {}

  pop() {}

  shift() {}

  unshift(val) {}

  get(index) {}

  set(index, val) {}

  insert(index, val) {}

  remove(index) {}

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
