// calculator.test.js
const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Tests', () => {
  test('addition', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtraction', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplication', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('division', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('division by zero throws error', () => {
    expect(() => { divide(6, 0) }).toThrowError("Division by zero is not allowed");
  });
});
