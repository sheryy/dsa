import { uniqueOccurrences } from "../app/04-unique-occurences";

describe("uniqueOccurrences", () => {
  it("should return true for array with unique occurrences", () => {
    const arr = [1, 2, 2, 1, 1, 3];
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  it("should return false for array with non-unique occurrences", () => {
    const arr = [1, 2, 2, 3, 3];
    expect(uniqueOccurrences(arr)).toBe(false);
  });

  it("should return true for empty array", () => {
    const arr: number[] = [];
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  it("should return true for array with single element", () => {
    const arr = [5];
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  it("should return false for array with all elements repeated once", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(uniqueOccurrences(arr)).toBe(false);
  });

  it("should return true for array with one element repeated multiple times", () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1];
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  it("should return false for array with all elements repeated same number of times", () => {
    const arr = [1, 1, 2, 2, 3, 3];
    expect(uniqueOccurrences(arr)).toBe(false);
  });
});
