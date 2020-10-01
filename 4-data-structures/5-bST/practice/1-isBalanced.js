function isBalanced(root) {
  if (!root) return true;
  const nodes = [[root, 0]],
    depths = [];

  while (nodes.length) {
    const [{ left, right }, depth] = nodes.pop();
    if (!left && !right) {
      if (nodes.indexOf(depth) < 1) {
        depths.push(depth);
        if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
          return false;
        }
      }
    } else {
      if (left) nodes.push([left, depth + 1]);
      if (right) nodes.push([right, depth + 1]);
    }
  }
  return true;
}

console.log(isBalanced(require("../practice").root));
