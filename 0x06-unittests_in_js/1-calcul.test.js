const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect.assertions(1);
      expect(calculateNumber('SUM', 1.4, 4.5)).toBe(6);
    });
  });

  describe('sUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      expect.assertions(1);
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).toBe(-4);
    });
  });

  describe('dIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect.assertions(1);
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).toBe(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect.assertions(1);
      expect(calculateNumber('DIVIDE', 1.4, 0)).toBe('Error');
    });
  });

  describe('invalid operation type', () => {
    it('should return "Invalid operation type" when an invalid operation type is provided', () => {
      expect.assertions(1);
      expect(calculateNumber('INVALID', 1.4, 4.5)).toBe('Invalid operation type');
    });
  });
});
