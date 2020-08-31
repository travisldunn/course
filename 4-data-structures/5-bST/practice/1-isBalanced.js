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

function isBalanced(root) {}

console.log(isBalanced(require("../practice").root));
