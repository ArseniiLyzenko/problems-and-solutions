describe("findMajorElement()", function() {
  it("[3, 2, 3] → 3", function() {
    assert.equal(findMajorElement([3, 2, 3]), 3);
  });

  it("[2, 2, 1, 1, 1, 2, 2] → 2", function() {
    assert.equal(findMajorElement([2, 2, 1, 1, 1, 2, 2]), 2);
  });

  it("[1] → 1", function() {
    assert.equal(findMajorElement([1]), 1);
  });

  it("[2, 2, 1, 3, 1, 2, 2] → 2", function() {
    assert.equal(findMajorElement([2, 2, 1, 3, 1, 2, 2]), 2);
  });
});
