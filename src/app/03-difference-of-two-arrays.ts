/**
 * Finds the difference of two arrays, returning lists of distinct integers that are present in one array but not in the other.
 *
 * @param {number[]} nums1 - The first array of integers.
 * @param {number[]} nums2 - The second array of integers.
 * @returns {[number[], number[]]} - A tuple containing two arrays:
 *                                   - The first array contains distinct integers present in nums1 but not in nums2.
 *                                   - The second array contains distinct integers present in nums2 but not in nums1.
 */
export function findDifferenceOfTwoArrays(
  nums1: number[],
  nums2: number[]
): [number[], number[]] {
  // Convert nums2 to a set for fast lookup
  const set2 = new Set(nums2);

  // Find all distinct integers in nums1 not present in nums2
  const distinctInNums1 = nums1.filter((num) => !set2.has(num));

  // Convert nums1 to a set for fast lookup
  const set1 = new Set(nums1);

  // Find all distinct integers in nums2 not present in nums1
  const distinctInNums2 = nums2.filter((num) => !set1.has(num));

  // Remove duplicates by converting arrays to sets and then back to arrays
  const uniqueDistinctInNums1 = Array.from(new Set(distinctInNums1));
  const uniqueDistinctInNums2 = Array.from(new Set(distinctInNums2));

  // Return the result as a tuple of two arrays
  return [uniqueDistinctInNums1, uniqueDistinctInNums2];
}
