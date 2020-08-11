function isBalanced(treeRoot) {
  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          depths.length > 2 ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}

// console.log(isBalanced(bst.root));

validTree = (treeRoot) => {
  nodes = [{ node: treeRoot, uper: Infinity, lower: -Infinity }];

  while (nodes.length) {
    let nodeGroup = nodes.pop();
    let node = nodeGroup.node;

    console.log(node);

    if (node.value < nodeGroup.lower || node.value > nodeGroup.uper) {
      return false;
    }

    if (node.left) {
      nodes.push({
        node: node.left,
        lower: nodeGroup.lower,
        uper: node.value,
      });
    }
    if (node.right) {
      nodes.push({
        node: node.right,
        lower: node.value,
        uper: nodeGroup.uper,
      });
    }
  }
  return true;
};

largest = (treeRoot) => {
  let current = treeRoot;

  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
};

secondLargest = (treeRoot) => {
  let current = treeRoot;

  while (current) {
    if (!current.right && current.left) return largest(current.left);

    if (current.right && !current.right.left && !current.right.right)
      return current;
    current = current.right;
  }
};

console.log(secondLargest(bst.root));
