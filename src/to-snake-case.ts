import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to snake_case format.
 * This function converts strings to lowercase with underscores separating words.
 *
 * @param {string} string - The string to convert to snake_case
 *
 * @returns {string | undefined} The string in snake_case format, or undefined if conversion fails
 *
 * @example
 * // Convert space-separated words
 * toSnakeCase("hello world") // Returns "hello_world"
 *
 * @example
 * // Convert camelCase
 * toSnakeCase("myVariableName") // Returns "my_variable_name"
 *
 * @example
 * // Convert hyphenated words
 * toSnakeCase("my-variable-name") // Returns "my_variable_name"
 *
 * @example
 * // Handle mixed case and numbers
 * toSnakeCase("apiKey123") // Returns "api_key_123"
 */
export function toSnakeCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("_")
}
