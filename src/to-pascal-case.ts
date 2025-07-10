import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to PascalCase format.
 * This function converts strings to PascalCase by capitalizing the first letter
 * of each word and removing separators.
 *
 * @param {string} string - The string to convert to PascalCase
 *
 * @returns {string | undefined} The string in PascalCase format, or undefined if conversion fails
 *
 * @example
 * // Convert space-separated words
 * toPascalCase("hello world") // Returns "HelloWorld"
 *
 * @example
 * // Convert hyphenated words
 * toPascalCase("my-variable-name") // Returns "MyVariableName"
 *
 * @example
 * // Convert underscore-separated words
 * toPascalCase("user_first_name") // Returns "UserFirstName"
 *
 * @example
 * // Handle mixed separators
 * toPascalCase("my-long_variable name") // Returns "MyLongVariableName"
 */
export function toPascalCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(
            new RegExp(/\s+(.)(\w*)/g),
            (_, $2, $3) => `${$2.toUpperCase() + $3}`
        )
        .replace(new RegExp(/\w/), s => s.toUpperCase())
}
