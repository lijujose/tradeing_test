const assert = require('assert');
const _module = require("./index");
const testData = require("./test_data.json");

describe("Test draw function", () => {
  afterEach(() => {
    _module.unset();
  });

  it("should create last possible square shape: width=2, height=2, padding=2", () => {
    const shape = _module.draw(2,2,2);
    const pixelString = shape.join();
    assert.equal(pixelString.indexOf("2"), -1);
    assert.equal(pixelString.indexOf("0"), -1);
    _module.print2DShape();
  });

  it("should create last possible sqaure shape with smallest possible padding(one recursion): width=6, height=6, padding=", () => {
    const shape = _module.draw(6,6,2);
    assert.equal(shape[1][1], 0);
    assert.equal(shape[2][2], 1);
    assert.equal(shape[3][3], 1);
    _module.print2DShape();
  });

  it("should create last possible rectangle shape (width > height) : width=3, height=2, padding=2", () => {
    const shape = _module.draw(3,2,2);
    _module.print2DShape();
  });

  it("should create last possible rectangle shape (width < height) : width=2, height=3, padding=2", () => {
    const shape = _module.draw(2,3,2);
    _module.print2DShape();
  });

  it("should throw error: Not a valid padding", () => {
    try {
      const shape = _module.draw(5,5,1);
    } catch(err) {
      assert.equal(err.message, "Not a valid padding");
      console.log(err.message);
    }
  });

  it("test with 'test_data.json' file", () => {
    for(let data of testData) {
      _module.unset();
      const args = data.input.split(",");
      const shape = _module.draw(
        Number(args[0]),
        Number(args[1]),
        Number(args[2]),
      );
      assert.equal(JSON.stringify(shape), data.pixelArrayJson);
    }
  });
});

