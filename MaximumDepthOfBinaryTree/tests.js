describe("funcName()", function() {
  it("[3, 9, 20, null, null, 15, 7] → 3", function() {
    assert.equal(findBinTreeDepth([3, 9, 20, null, null, 15, 7]), 3);
  });

  it("[3, 9, 20, null, null, 15, 7, null, null, null, null, 16] → 4", function() {
    assert.equal(findBinTreeDepth([3, 9, 20, null, null, 15, 7, null, null, null, null, 16]), 4);
  });

  it("[] → 0", function() {
    assert.equal(findBinTreeDepth([]), 0);
  });

  it("[3] → 1", function() {
    assert.equal(findBinTreeDepth([3]), 1);
  });

  it("[3, 9] → 2", function() {
    assert.equal(findBinTreeDepth([3, 9]), 2);
  });
});
