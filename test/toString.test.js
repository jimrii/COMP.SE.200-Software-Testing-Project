import toString from "../src/toString"

test("Converts integer 123 to string", () => {
  expect(toString(123)).toBe("123");
});