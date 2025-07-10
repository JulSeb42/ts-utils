import { slugify } from "./slugify"

/**
 * @description Transform a string to kebab-case format.
 * This function converts strings to lowercase with hyphens separating words.
 * Uses the slugify function internally for consistent conversion.
 *
 * @param {string} string - The string to convert to kebab-case
 *
 * @returns {string} The string in kebab-case format
 *
 * @example
 * // Convert space-separated words
 * toKebabCase("hello world") // Returns "hello-world"
 *
 * @example
 * // Convert camelCase
 * toKebabCase("myVariableName") // Returns "my-variable-name"
 *
 * @example
 * // Convert with special characters
 * toKebabCase("My Blog Post!") // Returns "my-blog-post"
 *
 * @example
 * // Handle mixed case and numbers
 * toKebabCase("apiKey123") // Returns "api-key-123"
 */
export function toKebabCase(string: string): string {
    return slugify(string)
}
