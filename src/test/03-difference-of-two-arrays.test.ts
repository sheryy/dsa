import { findDifferenceOfTwoArrays } from "../app/03-difference-of-two-arrays";

describe("findDifferenceOfTwoArrays", () => {
  it("should find the difference of two arrays", () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [4, 5, 6, 7, 8];
    const expectedResult = [
      [1, 2, 3],
      [6, 7, 8],
    ];
    expect(findDifferenceOfTwoArrays(nums1, nums2)).toEqual(expectedResult);
  });

  it("should handle arrays with duplicate elements", () => {
    const nums1 = [1, 2, 2, 3, 4, 5];
    const nums2 = [4, 5, 5, 6, 7, 8];
    const expectedResult = [
      [1, 2, 3],
      [6, 7, 8],
    ];
    expect(findDifferenceOfTwoArrays(nums1, nums2)).toEqual(expectedResult);
  });

  it("should handle arrays with negative numbers", () => {
    const nums1 = [-1, -2, -3, -4, -5];
    const nums2 = [-4, -5, -6, -7, -8];
    const expectedResult = [
      [-1, -2, -3],
      [-6, -7, -8],
    ];
    expect(findDifferenceOfTwoArrays(nums1, nums2)).toEqual(expectedResult);
  });

  it("should handle empty arrays", () => {
    const nums1: number[] = [];
    const nums2: number[] = [];
    const expectedResult = [[], []];
    expect(findDifferenceOfTwoArrays(nums1, nums2)).toEqual(expectedResult);
  });

  it("should handle arrays with only one element", () => {
    const nums1 = [1];
    const nums2 = [2];
    const expectedResult = [[1], [2]];
    expect(findDifferenceOfTwoArrays(nums1, nums2)).toEqual(expectedResult);
  });
});
