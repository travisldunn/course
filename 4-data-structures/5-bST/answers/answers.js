// A tree with no nodes is superbalanced, since there are no leaves!
// We short-circuit as soon as we find more than 2
// Nodes will store pairs of a node and the node's depth
// Pop a node and its depth from the top of our stack
// Сase: we found a leaf
// We only care if it's a new depth
// Two ways we might now have an unbalanced tree:
//   1) More than 2 different leaf depths
//   2) 2 leaf depths that are more than 1 apart
// Case: this isn't a leaf - keep stepping down

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

function isBalanced(root) {
  if (!root) return true;
  const depths = [],
    nodes = [[root, 0]];
  while (nodes.length) {
    const [{ left, right }, depth] = nodes.pop();
    if (!left && !right) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        if (
          depths.length > 2 ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1]))
        ) {
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

validTree = (root) => {
  const nodes = [{ node: root, lower: -Infinity, uper: Infinity }];
  while (nodes.length) {
    let { node, lower, uper } = nodes.pop(),
      { left, right, val } = node;
    if (val < lower || val > uper) return false;
    if (left) nodes.push({ node: left, lower, uper: val });
    if (right) nodes.push({ node: right, lower: val, uper });
  }
  return true;
};

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

secondLargest = (bst) => {
  const ary = bst.dFSInOrder();
  return ary.length > 1 ? ary[ary.length - 2] : false;
};

secondLargest = (bst) => bst.dFSInOrder()[bst.dFSInOrder().length - 2];

const secondLargest = (root) => {
  let current = root;
  while (current) {
    let { left, right, val } = current;
    if (!right && left) return largest(left);
    if (right && !right.right && !right.left) return current.val;
    current = current.right;
  }
};

console.log(secondLargest(bst.root));

function levelWidth(root) {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}
