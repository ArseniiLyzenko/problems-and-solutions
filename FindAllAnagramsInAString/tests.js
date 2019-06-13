describe("ObjFromString()", function() {
  it("abc → {a: 1, b: 1, c: 1}", function() {
    assert.deepEqual(new ObjFromString("abc"), {a: 1, b: 1, c: 1});
  });

  it("abab → {a: 2, b: 2}", function() {
    assert.deepEqual(new ObjFromString("abab"), {a: 2, b: 2});
  });
});

describe("isObjsEqual()", function() {
  it("{a: 1, b: 1, c: 1}, {a: 1, b: 1, c: 1} → true", function() {
    assert.deepEqual(isObjsEqual({a: 1, b: 1, c: 1}, {a: 1, b: 1, c: 1}), true);
  });

  it("{a: 1, b: 1, c: 1}, {a: 1, b: 2} → false", function() {
    assert.deepEqual(isObjsEqual({a: 1, b: 1, c: 1}, {a: 1, b: 2}), false);
  });

  it("{a: 1, b: 1, c: 1}, {a: 1, c: 1, b: 1} → true", function() {
    assert.deepEqual(isObjsEqual({a: 1, b: 1, c: 1}, {a: 1, c: 1, b: 1}), true);
  });

  it("{a: 2, b: 1}, {a: 1, b: 2} → false", function() {
    assert.deepEqual(isObjsEqual({a: 2, b: 1}, {a: 1, b: 2}), false);
  });

  it("{a: 3}, {a: 2} → false", function() {
    assert.deepEqual(isObjsEqual({a: 3}, {a: 2}), false);
  });

  it("{a: 3}, {a: 3} → true", function() {
    assert.deepEqual(isObjsEqual({a: 3}, {a: 3}), true);
  });

  it("{a: 1, b: 1, z: 1}, {z: 1, b: 1, a: 1} → true", function() {
    assert.deepEqual(isObjsEqual({a: 1, b: 1, z: 1}, {z: 1, b: 1, a: 1}), true);
  });

  it("{a: 1, b: 1, c: 1}, {a: 1, b: 1} → false", function() {
    assert.deepEqual(isObjsEqual({a: 1, b: 1, c: 1}, {a: 1, b: 1}), false);
  });

  it("{a: 1, b: 1}, {a: 1, b: 1, c: 1} → false", function() {
    assert.deepEqual(isObjsEqual({a: 1, b: 1}, {a: 1, b: 1, c: 1}), false);
  });
});

describe("funcName()", function() {
  it("cbaebabacd, abc → [0, 6]", function() {
    assert.deepEqual(funcName("cbaebabacd", "abc"), [0, 6]);
  });

  it("abab, ab → [0, 1, 2]", function() {
    assert.deepEqual(funcName("abab", "ab"), [0, 1, 2]);
  });
});
