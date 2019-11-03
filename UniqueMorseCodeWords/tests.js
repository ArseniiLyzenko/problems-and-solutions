let input;
let output;

describe("uniqueMorseRepresentations()", function() {
  input = ["gin", "zen", "gig", "msg"];
  output = 2;
  it(`${input} → ${output}`, function() {
    assert.equal(uniqueMorseRepresentations(input), output);
  });
});
