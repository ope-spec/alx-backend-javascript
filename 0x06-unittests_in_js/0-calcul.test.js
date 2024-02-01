const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
  it('should return 4 when adding 1 and 3', () => {
    const res = calculateNumber(1, 3);
    assert.strictEqual(res, 4);
  });

  it('should return 5 when adding 1 and 3.7', () => {
    const res = calculateNumber(1, 3.7);
    assert.strictEqual(res, 5);
  });

  it('should return 6 when adding 1.5 and 3.7', () => {
    const res = calculateNumber(1.5, 3.7);
    assert.strictEqual(res, 6);
  });

  it('should return 0 when adding 0 and 0', () => {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });

  it('should return -1 when adding -1 and 0', () => {
    const res = calculateNumber(-1, 0);
    assert.strictEqual(res, -1);
  });

  it('should return 1 when adding -0.5 and 1.5', () => {
    const res = calculateNumber(-0.5, 1.5);
    assert.strictEqual(res, 2);
  });

  it('should return -1 when adding -1.5 and -0.5', () => {
    const res = calculateNumber(-1.5, -0.5);
    assert.strictEqual(res, -1);
  });

  it('should return 100 when adding 50 and 50', () => {
    const res = calculateNumber(50, 50);
    assert.strictEqual(res, 100);
  });
});
