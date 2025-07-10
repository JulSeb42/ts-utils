import { toBaseCase } from "./to-base-case"

/**
 * @description Transform a string to Title Case format.
 * This function converts strings to Title Case by capitalizing the first letter
 * of each word and separating them with spaces.
 *
 * @param {string} string - The string to convert to Title Case
 *
 * @returns {string} The string in Title Case format
 *
 * @example
 * // Convert lowercase words
 * toTitleCase("hello world") // Returns "Hello World"
 *
 * @example
 * // Convert camelCase
 * toTitleCase("myVariableName") // Returns "My Variable Name"
 *
 * @example
 * // Convert hyphenated words
 * toTitleCase("my-variable-name") // Returns "My Variable Name"
 *
 * @example
 * // Handle mixed case and numbers
 * toTitleCase("apiKey123") // Returns "Api Key 123"
 */
export function toTitleCase(string: string): string {
    const formattedString = toBaseCase(string)

    const arr = formattedString.toLowerCase().split(" ")

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    return arr.join(" ")
}
