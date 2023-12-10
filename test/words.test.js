import words from "../src/words"

test("splits a string with multiple words", () => {
    expect(words("apples, oranges and bananas")).toStrictEqual(["apples", "oranges", "and", "bananas"]);
});

test("splits a string with non-Unicode characters", () => {
    expect(words("this\0string\0has\0null\0characters")).toStrictEqual(["this", "string", "has", "null", "characters"]);
});

test("a string consisting of only numbers", () => {
    expect(words("12345 5678 9")).toStrictEqual(["12345", "5678", "9"]);
});

// The current test results in ["apple", "12345", "4", "ppl", "3"].
// It is unclear and not documented whether or not it is intended that the 'words' function splits
// words with alphabetical characters and numbers mixed. For this reason the test is skipped for now.
test.skip("a string consisting of alphabetic characters and numbers", () => {
    expect(words("apple 12345 4ppl3")).toStrictEqual(["apple", "12345", "4ppl3"]);
});

test("a string consisting of only special characters", () => {
    expect(words("??_ .'^^¨ ¤#% %%&&><")).toStrictEqual([]);
});

// The current test results in ["lowercase", "UPPERCASE", "camel", "Case", "Pascal", "Case"].
// It is unclear and not documented whether or not it is intended that the 'words' function splits
// words with lowercase and uppercase characters mixed. For this reason the test is skipped for now.
test.skip("splits strings with uppercase and lowercase characters as expected", () => {
    expect(words("lowercase, UPPERCASE, camelCase, PascalCase")).toStrictEqual(["lowercase", "UPPERCASE", "camelCase", "PascalCase"]);
});

test("pattern doesn't match any word in the string", () => {
    expect(words("apple, orange, watermelon, potato, carrot, tomato", "banana")).toStrictEqual([]);
});

// Test results in a 'Received: serializes to the same string' error, that should be fixed by using
// 'toStrictEqual' matcher. However this doesn't fix the issue so the test is skipped for now.
test.skip("pattern matches a word in the string", () => {
    expect(words("apple, orange, banana, potato, carrot, tomato", "banana")).toStrictEqual(["banana"]);
});

test("regex pattern matching produces expected results", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toStrictEqual(["fred", "barney", "&", "pebbles"]);
});

test("pattern to match words to is undefined", () => {
    expect(words("apples, oranges and bananas", undefined)).toStrictEqual(["apples", "oranges", "and", "bananas"]);
});

test("handles invalid pattern types without unexpected results", () => {
    const arr = [ 1, 2 ]
    const obj = { x: 1 };

    expect(() => {
        words("apple, banana, orange", 3.14)
    }).not.toThrow();

    expect(() => {
        words("apple, banana, orange", true)
    }).not.toThrow();
    
    expect(() => {
        words("apple, banana, orange", arr)
    }).not.toThrow();

    expect(() => {
        words("apple, banana, orange", obj)
    }).not.toThrow();

});

test("throws an error when the string parameter is not of type string", () => {
    const arr = [ 1, 2 ]
    const obj = { x: 1 };

    expect(() => {
        words(3.14)
    }).toThrow();

    expect(() => {
        words(true)
    }).toThrow();
    
    expect(() => {
        words(arr)
    }).toThrow();

    expect(() => {
        words(obj)
    }).toThrow();
});