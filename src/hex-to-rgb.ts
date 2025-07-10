/**
 * @description Convert a hexadecimal color value to RGB format.
 * This function parses a hex color string and returns the RGB values as a formatted string.
 *
 * @param {string} hex - The hexadecimal color string (with or without #)
 *
 * @returns {string | null} The RGB values as a formatted string "(r, g, b)" or null if invalid
 *
 * @example
 * // Convert hex to RGB
 * hexToRgb("#1B4568") // Returns "(27, 69, 104)"
 *
 * @example
 * // Convert hex without hash symbol
 * hexToRgb("1B4568") // Returns "(27, 69, 104)"
 *
 * @example
 * // Convert white color
 * hexToRgb("#FFFFFF") // Returns "(255, 255, 255)"
 *
 * @example
 * // Invalid hex returns null
 * hexToRgb("invalid") // Returns null
 */
export function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    if (!result) return null

    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)

    return `(${r}, ${g}, ${b})`
}
