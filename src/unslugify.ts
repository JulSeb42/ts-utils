import { toSentenceCase } from "./to-sentence-case"

/**
 * @description Convert a slugified string back to a readable sentence format.
 * This function reverses the slugification process by replacing hyphens and underscores
 * with spaces and converting to sentence case.
 *
 * @param {string} string - The slugified string to convert back
 *
 * @returns {string | undefined} The unslugified string in sentence case, or undefined if conversion fails
 *
 * @example
 * // Convert hyphenated slug
 * unslugify("hello-world-foo") // Returns "Hello world foo"
 *
 * @example
 * // Convert underscore slug
 * unslugify("hello_world_foo") // Returns "Hello world foo"
 *
 * @example
 * // Convert mixed separators
 * unslugify("my-variable_name-slug") // Returns "My variable name slug"
 *
 * @example
 * // Handle single word
 * unslugify("hello") // Returns "Hello"
 */
export function unslugify(string: string): string | undefined {
    return toSentenceCase(string.replace(/-/g, " ").replace(/_/g, " "))
}
