const { describe, it } = require("node:test");
const assert = require("node:assert");
const { fooBarize } = require("./foobar");

describe("fooBarize test", () => {
  it("should return FooBar if the number is divisible by 5 and 3", () => {
    [15, 30, 60].forEach((num) => {
      assert.deepStrictEqual(fooBarize(num), "FooBar");
    });
  });

  it("should return Foo if the number is divisible only by 3", () => {
    [3, 6, 9].forEach((num) => {
      assert.deepStrictEqual(fooBarize(num), "Foo");
    });
  });

  it("should return Bar if the number is divisible only by 5", () => {
    [5, 10, 20].forEach((num) => {
      assert.deepStrictEqual(fooBarize(num), "Bar");
    });
  });

  it("should return the number as string if it is not divisible by 3, 5 or both", () => {
    const res = [1, 2, 4].map(fooBarize);
    assert.deepStrictEqual(res, ["1", "2", "4"]);
  });
});
