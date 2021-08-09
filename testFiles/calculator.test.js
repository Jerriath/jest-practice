import { expect, test } from "@jest/globals";
import calculator from "../codeFiles/calculator.js";

test.skip("testing add", () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test.skip("testing subtract", () => {
    expect(calculator.subtract(7, 2)).toBe(5);
});

test.skip("testing multiply", () => {
    expect(calculator.multiply(3, 8)).toBe(24);
});

test.skip("testing divide", () => {
    expect(calculator.divide(9, 3)).toBe(3);
})