const assert = require('assert');
const { it, describe } = require('mocha');
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
    const res = calculateNumber(1.6, 3.7);
    assert.strictEqual(res, 5);
  });
});
