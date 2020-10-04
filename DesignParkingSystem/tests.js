let testCases;

describe("funcName()", function() {

  testCases = {
    'type-input-here-1': type_output_here_1,
    'type-input-here-2': type_output_here_2,
    ...
  }

  for (const [input, output] of Object.entries(testCases)) {
    it(`${input} → ${output}`, function() {
      assert.equal(funcName(input), output);
    });
  }

});
