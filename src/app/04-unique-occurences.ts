/**
 * Checks if the number of occurrences of each value in the array is unique.
 *
 * @param {number[]} arr - An array of integers.
 * @returns {boolean} - True if the number of occurrences of each value in the array is unique, false otherwise.
 */
export function uniqueOccurrences(arr: number[]): boolean {
  // Create a map to count the occurrences of each value in the array
  const occurrenceMap = new Map<number, number>();

  // Count the occurrences of each value in the array
  for (const num of arr) {
    occurrenceMap.set(num, (occurrenceMap.get(num) || 0) + 1);
  }

  // Create a set to check for uniqueness of occurrences
  const occurrenceSet = new Set(occurrenceMap.values());

  // Return true if the size of the set matches the size of the map (indicating uniqueness), false otherwise
  return occurrenceSet.size === occurrenceMap.size;
}
