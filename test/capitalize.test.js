import capitalize from "../src/capitalize"

test("a string consisting of only lowercase characters", () => {
    expect(capitalize("foo")).toBe("Foo");
});

test("a string consisting of only uppercase characters", () => {
    expect(capitalize("FOO")).toBe("Foo");
});

test("a capitalized string", () => {
    expect(capitalize("Foo")).toBe("Foo");
});

test("a string with uppercase characters in the middle", () => {
    expect(capitalize("fOo")).toBe("Foo");
});

test("a multiple word string", () => {
    expect(capitalize("the sun is shining.")).toBe("The sun is shining.");
});

test("a string with number as the first character", () => {
    expect(capitalize("1foo")).toBe("1foo");
});

test("a string with numbers in the middle", () => {
    expect(capitalize("b4n4n4")).toBe("B4n4n4");
});

test("a string with special character as the first character", () => {
    expect(capitalize("?foo")).toBe("?foo");
});

test("a string with special characters in the middle", () => {
    expect(capitalize("b_n_n_")).toBe("B_n_n_");
});

test("a string with non-Unicode characters", () => {
    expect(capitalize("b\0n\0n\0")).toBe("B\0n\0n\0");
});

// 'capitalize' function converts the input parameter to a string, so it is expected that no errors
// are thrown when the input is a non-string.
test("handles non-string parameters without unexpected results", () => {
    const symbol = Symbol("XYZ");
    const arr = [ 1, 2 ]
    const obj = { x: 1 };

    expect(() => {
        capitalize(symbol)
    }).not.toThrow();
    
    expect(() => {
        capitalize(arr)
    }).not.toThrow();

    expect(() => {
        capitalize(obj)
    }).not.toThrow();

    expect(() => {
        capitalize(3.14)
    }).not.toThrow();

    expect(() => {
        capitalize(true)
    }).not.toThrow();
});

test("symbol", () => {
    expect(capitalize(Symbol("XYZ"))).toBe("Symbol(xyz)");
});

test("an array of strings", () => {
    expect(capitalize(["apple", "BANANA", "Orange"])).toBe("Apple,banana,orange");
});

test("boolean", () => {
    expect(capitalize(true)).toBe("True");
});