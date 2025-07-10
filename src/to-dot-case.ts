import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to dot.case format.
 * This function converts strings to lowercase with dots separating words.
 *
 * @param {string} string - The string to convert to dot.case
 *
 * @returns {string | undefined} The string in dot.case format, or undefined if conversion fails
 *
 * @example
 * // Convert space-separated words
 * toDotCase("hello world") // Returns "hello.world"
 *
 * @example
 * // Convert camelCase
 * toDotCase("myVariableName") // Returns "my.variable.name"
 *
 * @example
 * // Convert hyphenated words
 * toDotCase("my-variable-name") // Returns "my.variable.name"
 *
 * @example
 * // Handle mixed case and numbers
 * toDotCase("apiKey123") // Returns "api.key.123"
 */
export function toDotCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join(".")
}
