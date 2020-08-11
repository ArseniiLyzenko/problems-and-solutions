let input;
let output;

describe("runningSum()", function() {
  input = [1,2,3,4];
  output = [1,3,6,10];
  it(`${input} → ${output}`, function() {
    assert.deepEqual(runningSum(input), output);
  });

  input = [1,1,1,1,1];
  output = [1,2,3,4,5];
  it(`${input} → ${output}`, function() {
    assert.deepEqual(runningSum(input), output);
  });

  input = [3,1,2,10,1];
  output = [3,4,6,16,17];
  it(`${input} → ${output}`, function() {
    assert.deepEqual(runningSum(input), output);
  });
});
