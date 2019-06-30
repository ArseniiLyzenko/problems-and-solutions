describe("findBestProfit()", function() {
  it("[7, 1, 5, 3, 6, 4] → 5", function() {
    assert.equal(findBestProfit([7, 1, 5, 3, 6, 4]), 5);
  });

  it("[7, 6, 4, 3, 1] → 0", function() {
    assert.equal(findBestProfit([7, 6, 4, 3, 1]), 0);
  });

  it("[1, 2, 3, 4, 5] → 4", function() {
    assert.equal(findBestProfit([1, 2, 3, 4, 5]), 4);
  });

  it("[1, 2, 3, 2, 1] → 2", function() {
    assert.equal(findBestProfit([1, 2, 3, 2, 1]), 2);
  });

  it("[3, 2, 1, 2, 3] → 2", function() {
    assert.equal(findBestProfit([3, 2, 1, 2, 3]), 2);
  });
});
