function componentToHex(c: number) {
    var hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}

/**
 * @description Convert RGB color values to hexadecimal format.
 * This function takes individual red, green, and blue values and converts them to a hex color string.
 *
 * @param {number} r - The red component (0-255)
 * @param {number} g - The green component (0-255)
 * @param {number} b - The blue component (0-255)
 *
 * @returns {string} The hexadecimal color string with # prefix
 *
 * @example
 * // Convert RGB to hex
 * rgbToHex(27, 69, 104) // Returns "#1B4568"
 *
 * @example
 * // Convert white color
 * rgbToHex(255, 255, 255) // Returns "#FFFFFF"
 *
 * @example
 * // Convert black color
 * rgbToHex(0, 0, 0) // Returns "#000000"
 *
 * @example
 * // Convert with single digit values
 * rgbToHex(15, 5, 10) // Returns "#0F050A"
 */
export function rgbToHex(r: number, g: number, b: number) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}
