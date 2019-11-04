const assert = require('assert');
const _module = require("./index");

describe("Test draw function", () => {
  afterEach(() => {
    _module.unset();
  });

  it("should not create shape width=2, height=3", () => {
    const shape = _module.draw(2,3,2);
    assert.equal(shape.length, 0);
    console.log(shape);
  });

  it("should create last possible square shape: width-3, height=3", () => {
    const shape = _module.draw(3,3,2);
    assert.equal(shape[1][1], 0);
    console.log(shape);
  });

  it("should create last possible sqaure shape with smallest possible padding(one recursion): width=5, height=5, padding=2", () => {
    const shape = _module.draw(5,5,2);
    assert.equal(shape[2][2], 0);
    assert.equal(shape[2][3], 2);
    assert.equal(shape[1][3], 1);
    console.log(shape);
  });

  it("should throw error: Not a valid padding", () => {
    try {
      const shape = _module.draw(5,5,1);
    } catch(err) {
      assert.equal(err.message, "Not a valid padding");
      console.log(err.message);
    }
  });

  it("should create shapes: width=20, height=20, padding=4", () => {
    const shape = _module.draw(20,20,4);
    assert.equal(shape[0][0], 1);
    assert.equal(shape[1][1], 0);
    assert.equal(shape[2][2], 1);

    assert.equal(shape[9][9], 0);
    assert.equal(shape[10][10], 0);
    console.log(shape);
  })
});