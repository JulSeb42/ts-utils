/**
 * @description Capitalize the first letter of a string while keeping the rest unchanged.
 * This function converts the first character to uppercase and preserves the case of remaining characters.
 *
 * @param {string} string - The string to capitalize
 *
 * @returns {string} The string with the first character capitalized
 *
 * @example
 * // Capitalize a lowercase word
 * capitalize("hello") // Returns "Hello"
 *
 * @example
 * // Capitalize a sentence
 * capitalize("hello world") // Returns "Hello world"
 *
 * @example
 * // Already capitalized string
 * capitalize("Hello") // Returns "Hello"
 *
 * @example
 * // Empty string
 * capitalize("") // Returns ""
 */
export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
