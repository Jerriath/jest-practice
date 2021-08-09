import { expect, test } from "@jest/globals";
import caesarShift from "../codeFiles/caesarShift.js";

test.skip("Basic test", () => {
    expect(caesarShift("test", 1)).toBe("uftu");
});

test.skip("function wraps from z to a", () => {
    expect(caesarShift("test", 7)).toBe("alza");
});

test.skip("punctuation marks", () => {
    expect(caesarShift("hello! my name is jerry!!!", 1)).toBe("ifmmp! nz obnf jt kfssz!!!");
});

test.skip("capital letters with lowercase", () => {
    expect(caesarShift("Hello World", 1)).toBe("Ifmmp Xpsme");
});

