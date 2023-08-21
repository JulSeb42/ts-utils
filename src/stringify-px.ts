/*=============================================== Stringify px ===============================================*/

/**
 * @description Transform a value to `{value}px`
 * @example stringifyPx(123) => 123px
 */

export function stringifyPx(number: number | string): string {
    if (typeof number === "string") {
        return number
    } else {
        return `${number}px`
    }
}
