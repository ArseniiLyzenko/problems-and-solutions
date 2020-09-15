describe("mostVisited()", function() {
  it(`4, [1,3,1,2] → [1,2]`, function() {
    assert.deepEqual(mostVisited(4, [1,3,1,2]), [1,2]);
  });

  it(`2, [2,1,2,1,2,1,2,1,2] → [2]`, function() {
    assert.deepEqual(mostVisited(2, [2,1,2,1,2,1,2,1,2]), [2]);
  });

  it(`7, [1,3,5,7] → [1,2,3,4,5,6,7]`, function() {
    assert.deepEqual(mostVisited(7, [1,3,5,7]), [1,2,3,4,5,6,7]);
  });
});
