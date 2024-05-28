/**
 * Decodes an encoded string.
 *
 * @param {string} s - The encoded string containing the encoding rule k[encoded_string].
 * @returns {string} - The decoded string.
 */
export function decodeString(s: string): string {
  // Initialize two stacks to store the count and the result
  const countStack: number[] = [];
  const resultStack: string[] = [];
  let currentNumber = 0;
  let currentString = "";

  // Iterate through each character in the string
  for (const char of s) {
    if (char === "[") {
      // Push the current count and result to their respective stacks
      countStack.push(currentNumber);
      resultStack.push(currentString);
      // Reset the current count and string
      currentNumber = 0;
      currentString = "";
    } else if (char === "]") {
      // Get the count from the count stack
      const count = countStack.pop()!;
      // Repeat the current string count times and append it to the result from the result stack
      currentString = resultStack.pop()! + currentString.repeat(count);
    } else if (/\d/.test(char)) {
      // Update the current count
      currentNumber = currentNumber * 10 + parseInt(char);
    } else {
      // Append the current character to the current string
      currentString += char;
    }
  }

  // Return the decoded string
  return currentString;
}
