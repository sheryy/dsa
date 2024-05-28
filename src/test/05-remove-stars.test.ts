import { removeStars } from "../app/05-remove-stars";

describe("removeStars", () => {
  it("should remove stars and their closest non-star characters to the left", () => {
    const input = "leet**cod*e";
    const expectedOutput = "lecoe";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should remove all characters when input contains only stars", () => {
    const input = "erase*****";
    const expectedOutput = "";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with no stars", () => {
    const input = "abcdefgh";
    const expectedOutput = "abcdefgh";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with more stars than other characters", () => {
    const input = "a*b*c*d*e*f*g*h*i*j*k";
    const expectedOutput = "k";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with stars at the beginning", () => {
    const input = "***abcde";
    const expectedOutput = "abcde";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with stars at the end", () => {
    const input = "abcde***";
    const expectedOutput = "ab";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with stars interspersed with non-star characters at regular intervals", () => {
    const input = "a*b*c*d*e*f*g*h*i*j";
    const expectedOutput = "j";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with stars interspersed with non-star characters irregularly", () => {
    const input = "a**b*c*d**e*f*g*h*i**j";
    const expectedOutput = "j";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with multiple non-star characters between two stars", () => {
    const input = "a**bcd**e";
    const expectedOutput = "be";
    expect(removeStars(input)).toBe(expectedOutput);
  });

  it("should handle input with stars interspersed with single non-star characters", () => {
    const input = "*a*b*c*d*e*f*g*h*i*j*";
    const expectedOutput = "";
    expect(removeStars(input)).toBe(expectedOutput);
  });
});
