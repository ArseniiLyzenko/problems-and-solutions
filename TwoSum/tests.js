describe("twoSum()", function() {
  it("[2, 7, 11, 15], 9 → [0, 1]", function() {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  it("[2, 7, 11, 15], 17 → [0, 1]", function() {
    assert.deepEqual(twoSum([2, 7, 11, 15], 17), [0, 3]);
  });

  it("[2, 7, 11, 15], 18 → [0, 1]", function() {
    assert.deepEqual(twoSum([2, 7, 11, 15], 18), [1, 2]);
  });
});
