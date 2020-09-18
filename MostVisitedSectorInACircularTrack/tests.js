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

describe('findRound', function () {
  it(`4, [1,3] → [2,3]`, function() {
    assert.deepEqual(findRound(4, [1,3]), [2,3]);
  });

  it(`4, [1,2] → [2]`, function() {
    assert.deepEqual(findRound(4, [1,2]), [2]);
  });

  it(`7, [1,7] → [2,3,4,5,6,7]`, function() {
    assert.deepEqual(findRound(7, [1,7]), [2,3,4,5,6,7]);
  });

  it(`4, [3,1] → [4,1]`, function() {
    assert.deepEqual(findRound(4, [3,1]), [4,1]);
  });

  it(`7, [7,1] → [1,2,3,4,5,6]`, function() {
    assert.deepEqual(findRound(7, [7,6]), [1,2,3,4,5,6]);
  });
});

describe('findMostFrequentElements', function () {
  it(`[1,2,3,4,1,2] → [1,2]`, function() {
    assert.deepEqual(findMostFrequentElements([1,2,3,4,1,2]), [1,2]);
  });

  it(`[2,1,2,1,2,1,2,1,2] → [2]`, function() {
    assert.deepEqual(findMostFrequentElements([2,1,2,1,2,1,2,1,2]), [2]);
  });

  it(`[1,2,3,4,5,6,7] → [1,2,3,4,5,6,7]`, function() {
    assert.deepEqual(findMostFrequentElements([1,2,3,4,5,6,7]), [1,2,3,4,5,6,7]);
  });
});
