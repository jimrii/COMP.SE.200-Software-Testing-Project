// The following tests are created with ChatGPT with the following prompt:
//
// In a Javascript application function 'defaultTo' checks that a given value is not empty 
// and returns a default value if it is. The two parameters of the function are the value to 
// check and the default value. In the application the function ensures that there is a 
// default value if an input is empty. Can you write unit tests for this function using Jest 
// syntax?

import defaultTo from "../src/defaultTo"

test('returns original value if not empty', () => {
  const result = defaultTo('Hello', 'Default');
  expect(result).toBe('Hello');
});

test('returns \'\' if empty string', () => {
  const result = defaultTo('', 'Default');
  expect(result).toBe('');
});

test('returns default value if null', () => {
  const result = defaultTo(null, 'Default');
  expect(result).toBe('Default');
});

test('returns default value if undefined', () => {
  const result = defaultTo(undefined, 'Default');
  expect(result).toBe('Default');
});

test('returns original value if not empty and a number', () => {
  const result = defaultTo(42, 'Default');
  expect(result).toBe(42);
});

// The following test cases ChatGPT did not cover

test.skip('returns default value if NaN', () => {
    const result = defaultTo(NaN, 'Default');
    expect(result).toBe('Default');
});

test('returns [] value if empty array', () => {
    const result = defaultTo([], 'Default');
    expect(result).toStrictEqual([]);
});