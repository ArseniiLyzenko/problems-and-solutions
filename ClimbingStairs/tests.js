describe("ClimbingStairs()", function() {
  it("2 → 2", function() {
    assert.equal(ClimbingStairs(2), 2);
  });

  it("3 → 3", function() {
    assert.equal(ClimbingStairs(3), 3);
  });

  it("4 → 5", function() {
    assert.equal(ClimbingStairs(4), 5);
  });

  it("5 → 8", function() {
    assert.equal(ClimbingStairs(5), 8);
  });

  it("6 → 13", function() {
    assert.equal(ClimbingStairs(6), 13);
  });

  it("7 → 21", function() {
    assert.equal(ClimbingStairs(7), 21);
  });

  it("8 → 34", function() {
    assert.equal(ClimbingStairs(8), 34);
  });

  it("9 → 55", function() {
    assert.equal(ClimbingStairs(9), 55);
  });

  it("10 → 89", function() {
    assert.equal(ClimbingStairs(10), 89);
  });
});
