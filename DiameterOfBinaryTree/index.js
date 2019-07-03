/*
Given a binary tree, you need to compute the length of the diameter of the
tree. The diameter of a binary tree is the length of the longest path between
any two nodes in a tree. This path may or may not pass through the root.

Example:

Given a binary tree
          1
         / \
        2   3
       / \
      4   5

Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number
      of edges between them.
*/

function findBinTreeDiameter(tree) {
  let diameter = 0;

  findBinTreeDiameter_helper(tree);

  return diameter;

  function findBinTreeDiameter_helper(tree) {
    if (!tree) return 0;

    let left = findBinTreeDiameter_helper(tree.left);
    let right = findBinTreeDiameter_helper(tree.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}