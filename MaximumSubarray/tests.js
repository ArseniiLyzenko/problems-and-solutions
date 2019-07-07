describe("findMaximumSubarray()", function() {
  it("[-2, 1, -3, 4, -1, 2, 1, -5, 4] → 6", function() {
    assert.equal(findMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });

  it("[2, -1, 3, -4, 1, -2, -1, 5, -4] → 5", function() {
    assert.equal(findMaximumSubarray([2, -1, 3, -4, 1, -2, -1, 5, -4]), 5);
  });

  it("[1, 2, 3] → 6", function() {
    assert.equal(findMaximumSubarray([1, 2, 3]), 6);
  });

  it("[1, 2, 3, -1] → 6", function() {
    assert.equal(findMaximumSubarray([1, 2, 3, -1]), 6);
  });

  it("[-1, 1, 2, 3] → 6", function() {
    assert.equal(findMaximumSubarray([-1, 1, 2, 3]), 6);
  });
});
