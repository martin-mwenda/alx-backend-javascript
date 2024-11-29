const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when input 3.7 is rounded up and added to 1', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when input 3.7 is rounded up and added to 1 (reversed)', () => {
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });

  it('should return 4 when input 3.3 is rounded down and added to 1', () => {
    assert.strictEqual(calculateNumber(1, 3.3), 4);
  });

  it('should return 4 when input 3.3 is rounded down and added to 1 (reversed)', () => {
    assert.strictEqual(calculateNumber(3.3, 1), 4);
  });

  it('should return 5 when both inputs 1.2 and 3.7 are rounded and added', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs 1.5 and 3.7 are rounded up and added', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 5 when both inputs 3.7 and 1.2 are rounded and added', () => {
    assert.strictEqual(calculateNumber(3.7, 1.2), 5);
  });

  it('should return 3 when inputs 1.2 and 2.1 are rounded down and added', () => {
    assert.strictEqual(calculateNumber(1.2, 2.1), 3);
  });
});
