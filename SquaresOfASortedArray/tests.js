let input;
let output;

describe("sortedSquares()", function() {
  input = [-4,-1,0,3,10];
  output = [0,1,9,16,100];
  it(`${input} → ${output}`, function() {
    assert.deepEqual(sortedSquares(input), output);
  });

  input = [-7,-3,2,3,11];
  output = [4,9,9,49,121];
  it(`${input} → ${output}`, function() {
    assert.deepEqual(sortedSquares(input), output);
  });
});
