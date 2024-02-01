const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    expect.assertions(1);
    expect(calculateNumber(1, 3)).toBe(4);
  });

  it('should return 5 when adding 1 and 3.7', () => {
    expect.assertions(1);
    expect(calculateNumber(1, 3.7)).toBe(5);
  });

  it('should return 5 when adding 1.2 and 3.7', () => {
    expect.assertions(1);
    expect(calculateNumber(1.2, 3.7)).toBe(5);
  });

  it('should return 6 when adding 1.5 and 3.7', () => {
    expect.assertions(1);
    expect(calculateNumber(1.5, 3.7)).toBe(6);
  });
});
