import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to CONSTANT_CASE format.
 * This function converts strings to uppercase with underscores separating words.
 *
 * @param {string} string - The string to convert to CONSTANT_CASE
 *
 * @returns {string | undefined} The string in CONSTANT_CASE format, or undefined if conversion fails
 *
 * @example
 * // Convert space-separated words
 * toConstantCase("hello world") // Returns "HELLO_WORLD"
 *
 * @example
 * // Convert camelCase
 * toConstantCase("myVariableName") // Returns "MY_VARIABLE_NAME"
 *
 * @example
 * // Convert hyphenated words
 * toConstantCase("my-variable-name") // Returns "MY_VARIABLE_NAME"
 *
 * @example
 * // Handle mixed case and numbers
 * toConstantCase("apiKey123") // Returns "API_KEY_123"
 */
export function toConstantCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("_")
        .toUpperCase()
}
