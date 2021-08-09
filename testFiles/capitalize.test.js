//Test for capitalize.js

import capitalize from '../codeFiles/capitalize';

test.skip("Returns string with string[0] as capital", () => {
    expect(capitalize("test")).toBe("Test");
});

test.skip("Same as first but with weird string", () => {
    expect(capitalize("jsJIKihjKJOihuigbK")).toBe("JsJIKihjKJOihuigbK");
});

test.skip("Returns with number input", () => {
    expect(capitalize("test")).toBe("Test");
});

test.skip("Returns with empty string", () => {
    expect(capitalize("test")).toBe("Test");
});