import { decodeString } from "../app/06-decode-string";

describe("decodeString", () => {
  it("should decode an encoded string with a single letter", () => {
    const input = "3[a]";
    const expectedOutput = "aaa";
    expect(decodeString(input)).toBe(expectedOutput);
  });

  it("should decode an encoded string with multiple letters", () => {
    const input = "2[abc]";
    const expectedOutput = "abcabc";
    expect(decodeString(input)).toBe(expectedOutput);
  });

  it("should decode an encoded string with nested encoding", () => {
    const input = "3[a2[c]]";
    const expectedOutput = "accaccacc";
    expect(decodeString(input)).toBe(expectedOutput);
  });

  it("should decode an encoded string with multiple nested encodings", () => {
    const input = "2[ab3[c]]";
    const expectedOutput = "abcccabccc";
    expect(decodeString(input)).toBe(expectedOutput);
  });

  it("should decode an encoded string with a combination of single letters and nested encoding", () => {
    const input = "2[a3[b]c]";
    const expectedOutput = "abbbcabbbc";
    expect(decodeString(input)).toBe(expectedOutput);
  });

  it("should decode an encoded string with multiple repetitions", () => {
    const input = "3[a]2[bc]";
    const expectedOutput = "aaabcbc";
    expect(decodeString(input)).toBe(expectedOutput);
  });

  it("should decode an encoded string with multiple nested encodings and repetitions", () => {
    const input = "2[abc]3[cd]ef";
    const expectedOutput = "abcabccdcdcdef";
    expect(decodeString(input)).toBe(expectedOutput);
  });

  it("should decode an encoded string with only one repetition", () => {
    const input = "a2[b]c";
    const expectedOutput = "abbc";
    expect(decodeString(input)).toBe(expectedOutput);
  });
});
