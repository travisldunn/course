const largest = (root) => {
  let current = root;
  while (current) {
    if (!current.right) return current.val;
    current = current.right;
  }
};

const secondLargest = (root) => {
  let current = root;
  while (current) {
    let { left, right, val } = current;
    if (!right && left) return largest(left);
    if (right && !right.right && !right.left) return current.val;
    current = current.right;
  }
};

console.log(secondLargest(require("../practice").root));
console.log(largest(require("../practice").root));
