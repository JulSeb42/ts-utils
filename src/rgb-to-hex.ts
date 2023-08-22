/*=============================================== RGB to Hex ===============================================*/

/**
 * @description Convert a RGB value to Hex
 * @example rgbToHex(27, 69, 104) => ("#1B4568")
 */

function componentToHex(c: number) {
    var hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}

export function rgbToHex(r: number, g: number, b: number) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}
