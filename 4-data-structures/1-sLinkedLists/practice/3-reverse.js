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

function reverse(node) {
  if (node === null) {
    return node;
  }
  let prev = null;
  let current = node;
  let next;
  while (current) {
    next = current.next;
    current.next = prev;
    [prev, current] = [current, next];
  }

  return prev;
}
