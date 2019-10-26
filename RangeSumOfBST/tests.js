let root;
let left;
let right;
let output;

describe("calcRangeSumOfBST()", function() {
  root = [10, 5, 15, 3, 7, null, 18];
  left = 7;
  right = 15;
  output = 32;
  it(`${input} → ${output}`, function() {
    assert.equal(calcRangeSumOfBST(input), output);
  });

  root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6];
  left = 6;
  right = 10;
  output = 23;
  it(`${input} → ${output}`, function() {
    assert.equal(calcRangeSumOfBST(input), output);
  });
});