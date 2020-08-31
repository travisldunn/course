const largest = (root) => {
  let current = root;
  while (current) {
    if (!current.right) return current;
    current = current.right;
  }
  l;
};

const secondLargest = (root) => {};

console.log(secondLargest(require("../practice").root));
console.log(largest(require("../practice").root));
