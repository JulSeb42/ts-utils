import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to camelCase format.
 * This function converts strings to camelCase by removing spaces, hyphens, underscores,
 * and capitalizing the first letter of each word except the first.
 *
 * @param {string} string - The string to convert to camelCase
 *
 * @returns {string} The string in camelCase format
 *
 * @example
 * // Convert space-separated words
 * toCamelCase("hello world") // Returns "helloWorld"
 *
 * @example
 * // Convert hyphenated words
 * toCamelCase("my-variable-name") // Returns "myVariableName"
 *
 * @example
 * // Convert underscore-separated words
 * toCamelCase("user_first_name") // Returns "userFirstName"
 *
 * @example
 * // Handle mixed separators
 * toCamelCase("my-long_variable name") // Returns "myLongVariableName"
 */
export function toCamelCase(string: string): string {
    const formattedString = toBaseCase(string)

    return formattedString
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(
            new RegExp(/\s+(.)(\w*)/g),
            (_, $2, $3) => `${$2.toUpperCase() + $3}`
        )
}
