import { expect, test } from "@jest/globals";
import analyzeArray from "../codeFiles/arrayAnalysis.js";

test("test average", () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});

test("test min", () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
});

test("test max", () => {
    expect(analyzeArray([6, 7, 8, 9, 10]).max).toBe(10);
});

test("test length", () => {
    expect(analyzeArray([6, 7, 8, 9, 10]).length).toBe(5);
});

test("empty array", () => {
    expect(analyzeArray([])).toBe("Array is Empty.");
});