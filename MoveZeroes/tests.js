describe("moveZeroes()", function() {
  it("[0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]", function() {
    assert.deepEqual(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
  });

  it("[0, 0, 0, 3, 12] → [3, 12, 0, 0, 0]", function() {
    assert.deepEqual(moveZeroes([0, 0, 0, 3, 12]), [3, 12, 0, 0, 0]);
  });

  it("[1, 3, 12, 0, 0] → [1, 3, 12, 0, 0]", function() {
    assert.deepEqual(moveZeroes([1, 3, 12, 0, 0]), [1, 3, 12, 0, 0]);
  });

  it("[1] → [1]", function() {
    assert.deepEqual(moveZeroes([1]), [1]);
  });

  it("[0] → [0]", function() {
    assert.deepEqual(moveZeroes([0]), [0]);
  });

  it("[1, 2, 3, 4, 5] → [1, 2, 3, 4, 5]", function() {
    assert.deepEqual(moveZeroes([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
});
