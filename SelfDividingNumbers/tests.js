describe("findSelfDividingNumbers()", function() {
  let left = 1;
  let right = 22;
  let output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
  it(`[${left}, ${right}]→ ${output}`, function() {
    assert.equal(findSelfDividingNumbers(left, right), output);
  });
});
