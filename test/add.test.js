import add from "../src/add"

test("adds positive integers", () => {
    expect(add(1, 2)).toBe(3);
});

test("adds negative integers", () => {
    expect(add(100, -200)).toBe(-100);
    expect(add(-5, -5)).toBe(-10);
});

test("adds positive numbers", () => {
    expect(add(3.14, 3.14)).toBe(6.28);
    expect(add(1, 0.0005)).toBe(1.0005);
});

test("adds negative numbers", () => {
    expect(add(0, -1.23)).toBe(-1.23);
    expect(add(-0.5, -0.5)).toBe(-1);
});

test("adds booleans", () => {
    expect(add(10, true)).toBe(11);
    expect(add(true, false)).toBe(1);
});

test.skip("adds valid string representations of numbers", () => {
    expect(add("5", "5")).toBe(10);
});

test("return NaN when one or both of the parameters are arrays", () => {
    expect(add(0, [0, 1, 2, 3])).toBe(NaN);
    expect(add([0, 1], [0, 1])).toBe(NaN);
});

test("return NaN when one or both of the parameters are objects", () => {
    const obj = { x: 1 };
    expect(add(1, obj)).toBe(NaN);
    expect(add(obj, obj)).toBe(NaN);
});
