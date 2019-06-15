describe("mergeTwoBinTrees()", function() {
  it("Tree 1, Tree 2 → Tree 3", function() {
    assert.deepEqual(
      mergeTwoBinTrees(
        new TreeNode(1,
          new TreeNode(3,
            new TreeNode(5)),
          new TreeNode(2)),

        new TreeNode(2,
          new TreeNode(1,
            null,
            new TreeNode(4)),
          new TreeNode(3,
            null,
            new TreeNode(7))
        )
      ),
      new TreeNode(3,
        new TreeNode(4,
          new TreeNode(5),
          new TreeNode(4)),
        new TreeNode(5,
          null,
          new TreeNode(7))
      )
    );
  });

  it("(1), () → (1)", function() {
    assert.deepEqual(
      mergeTwoBinTrees(
        new TreeNode(1),
        null),
      new TreeNode(1)
    );
  });

  it("(1)-(2, null), (1)-(null, 2) → (2)-(2, 2)", function() {
    assert.deepEqual(
      mergeTwoBinTrees(
        new TreeNode(1,
          new TreeNode(2)),
        new TreeNode(1,
          null,
          new TreeNode(2))),
      new TreeNode(2,
        new TreeNode(2),
        new TreeNode(2))
    );
  });
});
