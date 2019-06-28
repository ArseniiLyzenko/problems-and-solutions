describe("convertToGreaterTree()", function() {
  it("(5) - (2,13) → (18) - (20,13)", function() {
    let tree = new TreeNode(5,
                  new TreeNode(2),
                  new TreeNode(13));

    convertToGreaterTree(tree);

    assert.deepEqual(tree,
      new TreeNode(18,
        new TreeNode(20),
        new TreeNode(13)));
  });

  it("(4) -(2,7) - (1,3,6,9) → (26) - (31,16) - (32,29,22,9)", function() {
    let tree = new TreeNode(4,
          new TreeNode(2,
            new TreeNode(1),
            new TreeNode(3)),
          new TreeNode(7,
            new TreeNode(6),
            new TreeNode(9)));

    convertToGreaterTree(tree);

    assert.deepEqual(tree,
      new TreeNode(26,
        new TreeNode(31,
          new TreeNode(32),
          new TreeNode(29)),
        new TreeNode(16,
          new TreeNode(22),
          new TreeNode(9))));
  });
});
