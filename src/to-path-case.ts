import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to path/case format.
 * This function converts strings to lowercase with forward slashes separating words.
 *
 * @param {string} string - The string to convert to path/case
 *
 * @returns {string | undefined} The string in path/case format, or undefined if conversion fails
 *
 * @example
 * // Convert space-separated words
 * toPathCase("hello world") // Returns "hello/world"
 *
 * @example
 * // Convert camelCase
 * toPathCase("myVariableName") // Returns "my/variable/name"
 *
 * @example
 * // Convert hyphenated words
 * toPathCase("my-variable-name") // Returns "my/variable/name"
 *
 * @example
 * // Handle mixed case and numbers
 * toPathCase("apiKey123") // Returns "api/key/123"
 */
export function toPathCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("/")
}
