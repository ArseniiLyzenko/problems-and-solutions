describe("isRobotReturnToOrigin()", function() {
  let input = 'UD';
  let output = true;
  it(`${input} → ${output}`, function() {
    assert.equal(isRobotReturnToOrigin(input), output);
  });

  input = 'LL';
  output = false;
  it(`${input} → ${output}`, function() {
    assert.equal(isRobotReturnToOrigin(input), output);
  });
});
