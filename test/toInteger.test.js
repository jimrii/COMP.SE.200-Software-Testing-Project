import toInteger from "../src/toInteger"

test("returns positive and negative integers without modifying them", () => {
    expect(toInteger(2)).toBe(2);
    expect(toInteger(-4)).toBe(-4);
    expect(toInteger(0)).toBe(0);
});

test("converts positive and negative numbers to integers", () => {
    expect(toInteger(3.14)).toBe(3);
    expect(toInteger(-0.05)).toBe(0);
});

test("converts booleans to integers", () => {
    expect(toInteger(true)).toBe(1);
    expect(toInteger(false)).toBe(0);
});

test("converts valid string representations of numbers to integers", () => {
    expect(toInteger("10")).toBe(10);
    expect(toInteger("3.14")).toBe(3);
    expect(toInteger("-1.23")).toBe(-1);
});

test("handle invalid string representations of numbers without unexpected results", () => {
    expect(() => {
        toInteger("123abc")
    }).not.toThrow();
});

test('converts valid hexadecimal string to integer', () => {
    const hex = "0x64";
    expect(toInteger(hex)).toBe(100);
})

test("converts number min value to 0", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
});

test("returns positive infinity as number max value", () => {
    expect(toInteger(Number.POSITIVE_INFINITY)).toBe(Number.MAX_VALUE);
});

test("returns negative infinity as negative number max value", () => {
    expect(toInteger(Number.NEGATIVE_INFINITY)).toBe(-Number.MAX_VALUE);
});

test("handle arrays without unexpected results", () => {
    expect(() => {
        toInteger([0, 1, 2, 3])
    }).not.toThrow();
});

test("handle objects without unexpected results", () => {
    const obj = { x: 1 };
    expect(() => {
        toInteger(obj)
    }).not.toThrow();
});
