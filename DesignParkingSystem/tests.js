let testCases;

describe("Parking System 1 (big: 1, medium: 1, small: 0)", function() {

  let packingSystem = new ParkingSystem(1, 1 ,0);
  console.log(packingSystem)

  testCases = [
    [1, true],
    [2, true],
    [3, false],
    [1, false],
  ];

  for (const [input, output] of testCases) {
    it(`${input} → ${output}`, function() {
      assert.equal(packingSystem.addCar(input), output);
    });
  }
  console.log(packingSystem)

});

describe("Parking System 2 (big: 7, medium: 7, small: 7)", function() {

  let packingSystem = new ParkingSystem(7, 7 ,7);
  console.log(packingSystem)

  testCases = [
    [1, true],
    [1, true],
    [1, true],
    [1, true],
    [1, true],
    [1, true],
    [1, true],
    [1, false],

    [2, true],
    [2, true],
    [2, true],
    [2, true],
    [2, true],
    [2, true],
    [2, true],
    [2, false],

    [3, true],
    [3, true],
    [3, true],
    [3, true],
    [3, true],
    [3, true],
    [3, true],
    [3, false],
  ];

  for (const [input, output] of testCases) {
    it(`${input} → ${output}`, function() {
      assert.equal(packingSystem.addCar(input), output);
    });
  }

});

describe("Parking System 3 (big: 4, medium: 2, small: 0)", function() {

  let packingSystem = new ParkingSystem(4, 2 ,0);
  console.log(packingSystem)

  testCases = [
    [1, true],
    [1, true],
    [1, true],
    [1, true],
    [1, false],
    [1, false],
    [1, false],
    [1, false],

    [2, true],
    [2, true],
    [2, false],
    [2, false],
    [2, false],
    [2, false],
    [2, false],
    [2, false],

    [3, false],
    [3, false],
    [3, false],
    [3, false],
    [3, false],
    [3, false],
    [3, false],
    [3, false],
  ];

  for (const [input, output] of testCases) {
    it(`${input} → ${output}`, function() {
      assert.equal(packingSystem.addCar(input), output);
    });
  }

});
