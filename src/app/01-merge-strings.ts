/**
 * Merges two strings alternately character by character.
 * If one string is longer than the other, the remaining characters of the longer string
 * are appended to the end of the result.
 *
 * @param {string} word1 - The first string to be merged.
 * @param {string} word2 - The second string to be merged.
 * @returns {string} - The merged string with characters from word1 and word2 alternated.
 */
export function mergeAlternative(word1: string, word2: string): string {
  // Create an array to hold the merged characters. The length is the sum of the lengths of both words.
  const result = new Array(word1.length + word2.length);

  // Determine the length of the longer word to ensure all characters are processed.
  const length = Math.max(word1.length, word2.length);

  // Initialize an index to keep track of the position in the result array.
  let resultIndex = 0;

  // Iterate over the indices up to the length of the longer word.
  for (let index = 0; index < length; index++) {
    // If the current index is within the bounds of word1, add the character from word1 to the result.
    if (index < word1.length) {
      result[resultIndex++] = word1[index];
    }
    // If the current index is within the bounds of word2, add the character from word2 to the result.
    if (index < word2.length) {
      result[resultIndex++] = word2[index];
    }
  }

  // Join the array of characters into a single string and return it.
  return result.join("");
}
