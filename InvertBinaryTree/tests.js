describe("invertBinTree()", function() {
  it("(4) -(2,7) - (1,3,6,9) → (4) - (7,2) - (9,6,3,1)", function() {
    assert.deepEqual(invertBinTree(
      new TreeNode(4,
        new TreeNode(2,
          new TreeNode(1),
          new TreeNode(3)),
        new TreeNode(7,
          new TreeNode(6),
          new TreeNode(9)))),

      new TreeNode(4,
        new TreeNode(7,
          new TreeNode(9),
          new TreeNode(6)),
        new TreeNode(2,
          new TreeNode(3),
          new TreeNode(1))));
  });
});

describe("swapBranches()", function() {
  it("(4) - (2, 7) → (4) - (7, 2)", function() {
    assert.deepEqual(swapBranches(
      new TreeNode(4, new TreeNode(2), new TreeNode(7))),
      new TreeNode(4, new TreeNode(7), new TreeNode(2)));
  });
});
