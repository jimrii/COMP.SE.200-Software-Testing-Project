import upperFirst from "../src/upperFirst"

test("a string consisting of only lowercase characters", () => {
    expect(upperFirst("foo")).toBe("Foo");
});

test("a string consisting of only uppercase characters", () => {
    expect(upperFirst("FOO")).toBe("FOO");
});

test("a capitalized string", () => {
    expect(upperFirst("Foo")).toBe("Foo");
});

test("a string with uppercase characters in the middle", () => {
    expect(upperFirst("fOo")).toBe("FOo");
});

test("a multiple word string", () => {
    expect(upperFirst("the sun is shining.")).toBe("The sun is shining.");
});

test("a string with number as the first character", () => {
    expect(upperFirst("1foo")).toBe("1foo");
});

test("a string with numbers in the middle", () => {
    expect(upperFirst("b4n4n4")).toBe("B4n4n4");
});

test("a string with special character as the first character", () => {
    expect(upperFirst("?foo")).toBe("?foo");
});

test("a string with special characters in the middle", () => {
    expect(upperFirst("b_n_n_")).toBe("B_n_n_");
});

test("a string with non-Unicode characters", () => {
    expect(upperFirst("b\0n\0n\0")).toBe("B\0n\0n\0");
});

test("throws an error when parameter is not a string", () => {
    const arr = [ 1, 2 ]
    const obj = { x: 1 };

    expect(() => {
        upperFirst(3.14)
    }).toThrow();

    expect(() => {
        upperFirst(true)
    }).toThrow();
    
    expect(() => {
        upperFirst(arr)
    }).toThrow();

    expect(() => {
        upperFirst(obj)
    }).toThrow();
});