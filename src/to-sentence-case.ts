import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to Sentence case format.
 * This function converts strings to sentence case by capitalizing only the first letter
 * and making the rest lowercase.
 *
 * @param {string} string - The string to convert to Sentence case
 *
 * @returns {string | undefined} The string in Sentence case format, or undefined if conversion fails
 *
 * @example
 * // Convert uppercase words
 * toSentenceCase("HELLO WORLD") // Returns "Hello world"
 *
 * @example
 * // Convert camelCase
 * toSentenceCase("myVariableName") // Returns "My variable name"
 *
 * @example
 * // Convert hyphenated words
 * toSentenceCase("my-variable-name") // Returns "My variable name"
 *
 * @example
 * // Handle mixed case
 * toSentenceCase("hELLo WoRLD") // Returns "Hello world"
 */
export function toSentenceCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return (
        formattedString.toLowerCase().charAt(0).toUpperCase() +
        formattedString.slice(1).toLowerCase()
    )
}
