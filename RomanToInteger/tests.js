let testCases;

describe("romanToInteger()", function() {

  testCases = {
    'III'     : 3,
    'IV'      : 4,
    'IX'      : 9,
    'LVIII'   : 58,
    'MCMXCIV' : 1994,
  }

  for (const [input, output] of Object.entries(testCases)) {
    it(`${input} → ${output}`, function() {
      assert.equal(romanToInteger(input), output);
    });
  }

});
