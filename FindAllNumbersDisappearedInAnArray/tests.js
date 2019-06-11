describe("funcName()", function() {
  it("[4,3,2,7,8,2,3,1] → [5,6]", function() {
    assert.deepEqual(funcName([4,3,2,7,8,2,3,1]), [5,6]);
  });

  it("[4,2,6,6,7,4,2] → [1,3,5]", function() {
    assert.deepEqual(funcName([4,2,6,6,7,4,2]), [1,3,5]);
  });

  it("[4,2,6,1,7,5,3] → []", function() {
    assert.deepEqual(funcName([4,2,6,1,7,5,3]), []);
  });
});
