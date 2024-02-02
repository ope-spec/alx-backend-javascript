const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUM", 4, 2);
      assert.strictEqual(res, 6);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 3.6, 1);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 3.9, 2.7);
      assert.strictEqual(res, 1);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 6, 2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 4, 0);
      assert.strictEqual(res, "Error");
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 2.5, 1.3);
      assert.strictEqual(res, 3);
    });
});