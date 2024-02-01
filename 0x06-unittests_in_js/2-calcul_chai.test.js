const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two numbers', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('should return the sum of two numbers with decimals', () => {
      expect(calculateNumber('SUM', 1.6, 2.6)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.3)).to.equal(-1);
    });
    it('should return the difference of two numbers with decimals', () => {
      expect(calculateNumber('SUBTRACT', 4.9, 2.7)).to.equal(2);
    });
    it('should return the difference of two negative numbers with decimals', () => {
      expect(calculateNumber('SUBTRACT', -4.9, -2.7)).to.equal(-2);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two numbers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('should return the division of two numbers with decimals', () => {
      expect(calculateNumber('DIVIDE', 4.6, 1.8)).to.equal(2.5);
    });
    it("should return 'Error' when dividing by zero", () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
  });
});
