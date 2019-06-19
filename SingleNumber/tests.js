describe("findSingleNumber()", function() {
  it("[2, 2, 1] → 1", function() {
    assert.equal(findSingleNumber([2, 2, 1]), 1);
  });

  it("[4, 1, 2, 1, 2] → 4", function() {
    assert.equal(findSingleNumber([4, 1, 2, 1, 2]), 4);
  });
});
