import { mergeAlternative } from "../app/01-merge-strings";

describe("mergeAlternative", () => {
  it("merges two equal length strings alternately", () => {
    expect(mergeAlternative("abc", "123")).toBe("a1b2c3");
  });

  it("merges when the first string is longer than the second", () => {
    expect(mergeAlternative("abcd", "123")).toBe("a1b2c3d");
  });

  it("merges when the second string is longer than the first", () => {
    expect(mergeAlternative("abc", "1234")).toBe("a1b2c34");
  });

  it("handles an empty first string", () => {
    expect(mergeAlternative("", "1234")).toBe("1234");
  });

  it("handles an empty second string", () => {
    expect(mergeAlternative("abcd", "")).toBe("abcd");
  });

  it("returns an empty string when both strings are empty", () => {
    expect(mergeAlternative("", "")).toBe("");
  });

  it("merges single character strings", () => {
    expect(mergeAlternative("a", "b")).toBe("ab");
  });

  it("merges when the first string is significantly longer", () => {
    expect(mergeAlternative("abcdef", "123")).toBe("a1b2c3def");
  });

  it("merges when the second string is significantly longer", () => {
    expect(mergeAlternative("abc", "123456")).toBe("a1b2c3456");
  });

  it("handles special characters", () => {
    expect(mergeAlternative("special", "!@#")).toBe("s!p@e#cial");
  });
});
