import toString from "../src/toString"

test("returns a short string without modifying it", () => {
    expect(toString("foo")).toBe("foo");
});

test("returns a long string without modifying it", () => {
    expect(toString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))
    .toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
});

test("converts symbol xyz to string \"Symbol(xyz)\"", () => {
    const symbol = Symbol("xyz");
    expect(toString(symbol)).toBe("Symbol(xyz)");
  });

test("converts integer 123 to string \"123\"", () => {
  expect(toString(123)).toBe("123");
});

test("converts number 0.05 to string \"0.05\"", () => {
    expect(toString(0.05)).toBe("0.05");
});
  
test("converts NaN to string \"NaN\"", () => {
    expect(toString(NaN)).toBe("NaN");
});

test("converts array [0, 1, 2, 3] to string \"0,1,2,3\"", () => {
    expect(toString([0, 1, 2, 3])).toBe("0,1,2,3");
});

test("converts booleans to strings", () => {
    expect(toString(true)).toBe("true");
    expect(toString(false)).toBe("false");
});

test.skip("converts undefined to empty string", () => {
    expect(toString(undefined)).toBe("");
});

test.skip("converts null to empty string", () => {
    expect(toString(null)).toBe("");
});
