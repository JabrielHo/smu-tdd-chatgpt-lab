// fizzbuzz.test.js

// Import the function to be tested
const fizzbuzz = require('./fizzbuzz');

// Test cases
describe('FizzBuzz Tests', () => {
  test('Returns "Fizz" if the number is divisible by 3', () => {
    expect(fizzbuzz(9)).toBe('Fizz');
  });

  test('Returns "Buzz" if the number is divisible by 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
  });

  test('Returns "FizzBuzz" if the number is divisible by both 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  test('Returns the number itself for non-numeric input', () => {
    expect(fizzbuzz("abc")).toBe("abc");
  });

  test('Returns the number itself for negative input', () => {
    expect(fizzbuzz(-7)).toBe(-7);
  });
});
