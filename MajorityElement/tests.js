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

  it("[5, 5, 1, 3, 1, 5, 5] → 5", function() {
    assert.equal(findMajorElement([5, 5, 1, 3, 1, 5, 5]), 5);
  });
});

describe("findKeyWithMaxValue()", function() {
  it("{1: 4, 2: 8, 3: 5} → 2", function() {
    assert.equal(findKeyWithMaxValue({1: 4, 2: 8, 3: 5}), 2);
  });

  it("{a: 4, b: 8, c: 5} → b", function() {
    assert.equal(findKeyWithMaxValue({a: 4, b: 8, c: 5}), "b");
  });
});