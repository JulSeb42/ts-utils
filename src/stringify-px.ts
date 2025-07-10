/**
 * @description Transform a numeric value to a CSS pixel string format.
 * This function converts numbers to "{value}px" format while preserving existing strings.
 *
 * @param {number | string} value - The value to convert to pixel format
 *
 * @returns {string} The value formatted as a CSS pixel string, or the original string if already a string
 *
 * @example
 * // Convert number to pixels
 * stringifyPx(123) // Returns "123px"
 *
 * @example
 * // Preserve existing string
 * stringifyPx("50%") // Returns "50%"
 *
 * @example
 * // Convert zero value
 * stringifyPx(0) // Returns "0px"
 *
 * @example
 * // Convert decimal values
 * stringifyPx(12.5) // Returns "12.5px"
 */
export function stringifyPx(value: number | string): string {
    if (typeof value === "string") {
        return value
    } else {
        return `${value}px`
    }
}
