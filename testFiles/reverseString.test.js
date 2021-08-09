import { expect, test } from "@jest/globals";
import reverseString from "../codeFiles/reverseString.js";

test.skip("Basic test", () => {
    expect(reverseString("test")).toBe("tset");
});

test.skip("Test with spaces and apostrophe", () => {
    expect(reverseString(" hello is this wendy's ")).toBe(" s'ydnew siht si olleh ");
});

test.skip("Empty string test", () => {
    expect(reverseString("")).toBe("");
});

test.skip("Test with numbers", () => {
    expect(reverseString("3.14159265")).toBe("56295141.3");
});