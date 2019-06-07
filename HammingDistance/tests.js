describe("calcHammingDistance()", function() {
  it("1, 4 → 2", function() {
    assert.equal(calcHammingDistance(1, 4), 2);
  });

  it("4, 8 → 2", function() {
    assert.equal(calcHammingDistance(4, 8), 2);
  });
});
