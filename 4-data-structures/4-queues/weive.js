// Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one. Use the 'enqueue',
// 'dequeue', and 'peek' functions.

const Queue = require("./practice");

const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);

const q2 = new Queue();
q2.enqueue("Hi");
q2.enqueue("There");

function weave(q1, q2) {
  const q = new Queue();
  while (q1.peek() || q2.peek()) {
    if (q1.peek()) q.enqueue(q1.dequeue());
    if (q2.peek()) q.enqueue(q2.dequeue());
  }
  return q;
}

const weavedQ = weave(q1, q2);

console.log(weavedQ.dequeue()); // 1
console.log(weavedQ.dequeue()); // "Hi"
console.log(weavedQ.dequeue()); // 2
console.log(weavedQ.dequeue()); // "There"
