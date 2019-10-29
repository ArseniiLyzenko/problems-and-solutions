let root;
let left;
let right;
let output;

describe("calcRangeSumOfBST()", function() {
  root = [10, 5, 15, 3, 7, null, 18];
  left = 7;
  right = 15;
  output = 32;
  it(`root = [${root}], left = ${left}, right = ${right} → ${output}`, function() {
    assert.equal(calcRangeSumOfBST(root, left, right), output);
  });

  root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6];
  left = 6;
  right = 10;
  output = 23;
  it(`root = [${root}], left = ${left}, right = ${right} → ${output}`, function() {
    assert.equal(calcRangeSumOfBST(root, left, right), output);
  });
});
