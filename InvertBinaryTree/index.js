/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you
can’t invert a binary tree on a whiteboard so f*** off.
*/

function invertBinTree(tree) {
  if (!tree.left && !tree.right) return;

  swapBranches(tree);

  invertBinTree(tree.left);
  invertBinTree(tree.right);

  return tree;
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function swapBranches(node) {
  let tmp = node.left;
  node.left = node.right;
  node.right = tmp;

  return node;
}
