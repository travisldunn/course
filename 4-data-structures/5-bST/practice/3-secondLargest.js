const largest = (root) => {
  let current = root;
  while (current.right) current = current.right;
  return current.val;
};

const secondLargest = (root) => {
  let current = root;
  while (true) {
    let { left, right, val } = current;
    if (!right && left) return largest(left);
    if (right && !right.right && !right.left) return val;
    current = current.right;
  }
};

console.log(secondLargest(require("../practice").root));
console.log(largest(require("../practice").root));
 