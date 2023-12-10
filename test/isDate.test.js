// The following tests are created with ChatGPT with the following prompt:
//
// I have a Javascript application with a 'isDate' function, that checks if the given 
// parameter is a Date object in which case the function returns true. In other cases the
// return value is false. Can you write unit tests for this function using Jest syntax?

import isDate from "../src/isDate"

describe('isDate function', () => {
  test('should return true for a Date object', () => {
    const date = new Date();
    expect(isDate(date)).toBe(true);
  });

  test('should return false for a non-Date object', () => {
    const notDate = '2023-12-10';
    expect(isDate(notDate)).toBe(false);
  });

  test('should return false for a number', () => {
    const number = 42;
    expect(isDate(number)).toBe(false);
  });

  test('should return false for an array', () => {
    const array = [1, 2, 3];
    expect(isDate(array)).toBe(false);
  });
});