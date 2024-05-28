/**
 * Removes stars and their closest non-star characters to the left from a string.
 *
 * @param {string} s - The input string containing stars (*) and other characters.
 * @returns {string} - The string after all stars and their closest non-star characters to the left have been removed.
 */
export function removeStars(s: string): string {
  // Initialize an empty array to store characters that will remain after removal
  const stack: string[] = [];

  // Iterate through the characters of the input string
  for (const char of s) {
    // If the current character is not a star, add it to the stack
    if (char !== "*") {
      stack.push(char);
    }
    // If the current character is a star and there are characters in the stack,
    // remove the top character from the stack (closest non-star character to the left)
    else if (stack.length > 0) {
      stack.pop();
    }
  }

  // Convert the stack to a string and return it
  return stack.join("");
}
