describe("findBinTreeDiameter()", function() {
  it("(1) - (2,3) - (4,5,null,null) → 4", function() {
    let tree = new TreeNode(1,
                  new TreeNode(2,
                    new TreeNode(4),
                    new TreeNode(5)),
                  new TreeNode(3));

    assert.equal(findBinTreeDiameter(tree), 3);
  });

  it("(4) - (2,7) - (1,3,6,9) → 4", function() {
    let tree = new TreeNode(4,
                 new TreeNode(2,
                   new TreeNode(1),
                   new TreeNode(3)),
                 new TreeNode(7,
                   new TreeNode(6),
                   new TreeNode(9)));

    assert.equal(findBinTreeDiameter(tree), 4);
  });

  it("(5) - (2,13) → 2", function() {
    let tree = new TreeNode(5,
                 new TreeNode(2),
                 new TreeNode(13));

    assert.deepEqual(findBinTreeDiameter(tree), 2);
  });

  it("(1) - (2,null) - (4,5,null,null) - (6,null,7) → 4", function() {
    let tree = new TreeNode(1,
                 new TreeNode(2,
                   new TreeNode(4,
                     new TreeNode(6)),
                   new TreeNode(5,
                     new TreeNode(7))));

    assert.equal(findBinTreeDiameter(tree), 4);
  });
});