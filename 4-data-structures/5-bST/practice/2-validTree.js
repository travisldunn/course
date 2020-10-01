validTree = (root) => {
  const nodes = [[root, -Infinity, Infinity]];
  while (nodes.length) {
    const [{ left, right, val }, lower, uper] = nodes.pop();
    if (val < lower || val > uper) return false;
    if (left) nodes.push([left, lower, val]);
    if (right) nodes.push([right, val, uper]);
  }
  return true;
};

console.log(validTree(require("../practice").root));
